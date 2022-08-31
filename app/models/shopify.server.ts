import { GraphQLClient } from 'graphql-request';
import productsQuery from '~/queries/shopify/products';

// https://www.npmjs.com/package/graphql-request
const graphcms = new GraphQLClient(
    `https://${process.env.SHOPIFY_STORE_URL}/api/2022-07/graphql.json` || '',
    {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': `${process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN}`
        }
    }
);

interface Args {
    slug: string | undefined;
}

export async function getProducts({ slug }: Args) {
    if (!slug) console.error('⚠️ Slug is missing or incorrect');

    const variables = {
        slug
    };

    const products = await graphcms.request(productsQuery, variables);

    return products;
}
