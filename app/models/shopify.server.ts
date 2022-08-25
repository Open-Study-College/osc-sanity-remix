import { shopifyConnector } from '~/lib/graphqlConnectors.server';

export const getProductsFromCollection = async (slug = '') => {
    if (!slug) console.error('⚠️ Slug is missing or incorrect');

    try {
        const products = await shopifyConnector({
            query: `
      query collectionBySlug($slug: String) {
        collection(handle:$slug) {
          products(first:12) {
              nodes {
                id
                title
                handle
                featuredImage {
                    altText
                    height
                    width
                    url
                }
                options(first: 10) {
                    values
                    name
                }
                compareAtPriceRange {
                    minVariantPrice {
                        amount
                        currencyCode
                    }
                }
                priceRange {
                    minVariantPrice {
                        amount
                        currencyCode
                    }
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
