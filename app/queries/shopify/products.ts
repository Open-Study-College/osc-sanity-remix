import { gql } from 'graphql-request';

export default gql`
    query collectionBySlug($slug: String) {
        collection(handle: $slug) {
            products(first: 12) {
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
    }
`;
