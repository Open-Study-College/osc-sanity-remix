import { GraphQLClient } from 'graphql-request';
import type {
    GetHomeQuery,
    SettingsQuery,
    CollectionQuery,
    ProductQuery,
    PageQuery,
    CollectionBySlugQuery,
    ProductBySlugQuery,
    PageBySlugQuery,
    AssetQuery
} from '~/graphql/sanity/sanity-generated';
import getHomeQuery from '~/graphql/sanity/home.query';
import getSettingsQuery from '~/graphql/sanity/settings.query';
import { collectionsQuery, productsQuery, pagesQuery } from '~/graphql/sanity/pages.query';
import {
    productSlugQuery,
    collectionSlugQuery,
    pageSlugQuery,
    assetQuery
} from '~/graphql/sanity/helpers.query';

interface pageArgs {
    slug: string | undefined;
    useCdn: boolean;
}

const clientUrl = `https://${process.env.SANITY_STUDIO_API_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.SANITY_STUDIO_API_DATASET}/default`;
const clientUrlCDN = `https://${process.env.SANITY_STUDIO_API_PROJECT_ID}.apicdn.sanity.io/v1/graphql/${process.env.SANITY_STUDIO_API_DATASET}/default`;

// https://www.npmjs.com/package/graphql-request
const graphcms = new GraphQLClient(clientUrl || '', {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SANITY_STUDIO_API_TOKEN}`
    }
});

export async function getHome({ useCdn }: { useCdn: boolean }) {
    if (useCdn) {
        graphcms.setEndpoint(clientUrlCDN);
    }

    try {
        const { allHome } = await graphcms.request<GetHomeQuery>(getHomeQuery);

        return allHome;
    } catch (err) {
        console.error(JSON.stringify(err, undefined, 2));
        process.exit(1);
    }
}

export async function getSettings() {
    try {
        const variables = {
            id: 'settings'
        };
        const settings = await graphcms.request<SettingsQuery>(getSettingsQuery, variables);

        return settings;
    } catch (err) {
        console.error(JSON.stringify(err, undefined, 2));
        process.exit(1);
    }
}

export async function getCollection({ slug, useCdn }: pageArgs) {
    if (!slug) console.error('⚠️ Slug is missing or incorrect');

    if (useCdn) {
        graphcms.setEndpoint(clientUrlCDN);
    }

    try {
        const variables = {
            slug
        };

        // @ts-ignore
        const { allCollection } = await graphcms.request<CollectionQuery>(
            collectionsQuery,
            variables
        );

        return allCollection;
    } catch (err) {
        console.error(JSON.stringify(err, undefined, 2));
        process.exit(1);
    }
}

export async function getProduct({ slug, useCdn }: pageArgs) {
    if (!slug) console.error('⚠️ Slug is missing or incorrect');

    if (useCdn) {
        graphcms.setEndpoint(clientUrlCDN);
    }

    try {
        const variables = {
            slug
        };

        // @ts-ignore
        const { allProduct } = await graphcms.request<ProductQuery>(productsQuery, variables);

        return allProduct;
    } catch (err) {
        console.error(JSON.stringify(err, undefined, 2));
        process.exit(1);
    }
}

export async function getPage({ slug, useCdn }: pageArgs) {
    if (!slug) console.error('⚠️ Slug is missing or incorrect');

    if (useCdn) {
        graphcms.setEndpoint(clientUrlCDN);
    }

    const variables = {
        slug
    };

    // @ts-ignore
    const { allPage } = await graphcms.request<PageQuery>(pagesQuery, variables);

    return allPage;
}

export async function getInteralUrl(ref: string) {
    if (!ref) console.error('⚠️ Ref is missing or incorrect');

    try {
        const variables = {
            id: ref
        };

        let query;
        const isShopifyProduct = ref.includes('shopifyProduct');
        const isShopifyCollection = ref.includes('shopifyCollection');

        if (isShopifyProduct) {
            query = await graphcms.request<ProductBySlugQuery>(productSlugQuery, variables);
        } else if (isShopifyCollection) {
            query = await graphcms.request<CollectionBySlugQuery>(collectionSlugQuery, variables);
        } else {
            query = await graphcms.request<PageBySlugQuery>(pageSlugQuery, variables);
        }

        return query;
    } catch (err) {
        console.error(JSON.stringify(err, undefined, 2));
        process.exit(1);
    }
}

export async function getAsset(ref: string) {
    if (!ref) console.error('⚠️ Ref is missing or incorrect');

    try {
        const variables = {
            id: ref
        };

        const asset = graphcms.request<AssetQuery>(assetQuery, variables);

        return asset;
    } catch (err) {
        console.error(JSON.stringify(err, undefined, 2));
        process.exit(1);
    }
}
