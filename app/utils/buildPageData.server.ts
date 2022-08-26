import type { Params } from 'react-router-dom';
import {
    queryPagesBySlug,
    queryCollectionsBySlug,
    queryProductsBySlug,
    queryInternalUrl,
    queryAsset,
    queryHomePage
} from '~/models/sanity.server';
import type { SanityCollectionPage, SanityPage } from '~/types';
import { getSlugFromReference, getAssetFromReference } from '~/utils/getReferenceFromModules';

interface Args {
    request: Request;
    params: Params;
    type: string;
}

export default async function buildPageData({ request, params, type }: Args) {
    // Query our data from graphql endpoint
    let query;
    let data;

    switch (type) {
        case 'page':
            query = await queryPagesBySlug(params.slug);
            data = query.allPage;
            break;
        case 'collection':
            query = await queryCollectionsBySlug(params.slug);
            data = query.allCollection;
            break;
        case 'product':
            query = await queryProductsBySlug(params.slug);
            data = query.allProduct;
            break;
        default:
            query = await queryHomePage();
            data = query.allHome;
            break;
    }

    // Filter our queried data into live and preview datasets
    const livePageData = data.filter(
        (page: SanityPage | SanityCollectionPage) => !page._id.includes('drafts')
    )[0];
    const previewPageData = data.filter((page: SanityPage | SanityCollectionPage) =>
        page._id.includes('drafts')
    )[0];

    // Prepare the preview url param
    const requestUrl = new URL(request?.url);
    const isPreview =
        requestUrl?.searchParams?.get('preview') === previewPageData?._rev ? true : false;

    if ((!livePageData && !previewPageData) || (!livePageData && !isPreview)) {
        throw new Response('Not Found', { status: 404 });
    }

    // Return the appropriate data
    const page = isPreview ? previewPageData : livePageData;

    // Add the reference slug to the returned response
    if (page.modules) {
        await getSlugFromReference(page, queryInternalUrl);
        await getAssetFromReference(page, queryAsset);
    }

    return { page, isPreview };
}
