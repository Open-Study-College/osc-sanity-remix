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

    // Prepare the preview url param
    const requestUrl = new URL(request?.url);

    // We're simply checking if the url has a preview param to decide whether to use the cdn or not.
    // This will allow people viewing the preview not to have to wait for the cdn to update
    // https://www.sanity.io/docs/preview-content-on-site
    // Could be a better way to do this?
    const isPreviewUrl = requestUrl?.searchParams?.get('preview') ? true : false;
    const shouldUseCdn = isPreviewUrl ? false : true;

    switch (type) {
        case 'page':
            query = await queryPagesBySlug({
                slug: params.slug,
                useCdn: shouldUseCdn
            });
            data = query.allPage;
            break;
        case 'collection':
            query = await queryCollectionsBySlug({
                slug: params.slug,
                useCdn: shouldUseCdn
            });
            data = query.allCollection;
            break;
        case 'product':
            query = await queryProductsBySlug({
                slug: params.slug,
                useCdn: shouldUseCdn
            });
            data = query.allProduct;
            break;
        default:
            query = await queryHomePage({
                slug: undefined,
                useCdn: shouldUseCdn
            });
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

    // Check if we're on an available preview page
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
