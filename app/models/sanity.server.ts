import type { Params } from 'react-router-dom';
import { getClient } from '~/lib/sanity/getClient.server';

interface Args {
    request: Request;
    params?: Params;
    query: string;
}

export default async function getPageData({ request, params, query }: Args) {
    if (!request) throw new Error('Request must be passed');

    const requestUrl = new URL(request?.url);
    const isPreview = requestUrl?.searchParams?.get('preview') ? true : false;

    try {
        const param = params?.slug ? { slug: params.slug } : {};

        const querySanityDataset = await getClient(isPreview).fetch(query, param);

        // @ts-ignore
        const pageData = querySanityDataset.filter((item) => {
            const hasDrafts = item._id.includes('drafts');

            // Only try and fetch the previewClient data if drafts exist in the query response
            return isPreview && hasDrafts ? hasDrafts : !hasDrafts;
        })[0];

        return { page: pageData, isPreview };
    } catch (err) {
        console.error(err);
    }
}
