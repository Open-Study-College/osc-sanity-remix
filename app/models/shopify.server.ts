import { shopifyConnector } from '~/lib/graphqlConnectors.server';

export const getProductsFromCollection = async (slug = '') => {
    if (!slug) console.error('⚠️ Slug is missing or incorrect');

    try {
        const products = await shopifyConnector({
            query: `
      query collectionBySlug($slug: String) {
        collection(handle:$slug) {
          products(first:10) {
            edges {
              node {
                id
                title
                handle
              }
            }
          }
        }
      }`,
            variables: {
                slug
            }
        });

        return products;
    } catch (err) {
        console.error({ error: err });
    }
};
