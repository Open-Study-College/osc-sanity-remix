import { gql } from 'graphql-request';

export const productSlugQuery = gql`
    query product($id: ID!) {
        Product(id: $id) {
            store {
                slug {
                    current
                }
            }
        }
    }
`;

export const collectionSlugQuery = gql`
    query collection($id: ID!) {
        Collection(id: $id) {
            store {
                slug {
                    current
                }
            }
        }
    }
`;

export const pageSlugQuery = gql`
    query page($id: ID!) {
        Page(id: $id) {
            slug {
                current
            }
        }
    }
`;

export const assetQuery = gql`
    query Asset($id: ID!) {
        SanityFileAsset(id: $id) {
            url
            altText
        }
    }
`;
