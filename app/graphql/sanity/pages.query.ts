import { gql } from 'graphql-request';
import { hero } from './fragments/hero';
import { modules } from './fragments/modules';
import { seo } from './fragments/seo';

// can't query on the single Product as you have to pass the ID to select it
// We want to filter by the slug so have to use allProduct and this nasty looking query
export const collectionsQuery = gql`
query collectionBySlug($slug: String) {
    allCollection(where: { store: { slug: { current: { eq: $slug } } } }) {
        _id
        _rev
        store {
            title
        }
        ${hero}
        ${modules}
        ${seo}
    }
}`;

export const productsQuery = gql`
query productBySlug($slug: String) {
    allProduct(where: { store: { slug: { current: { eq: $slug } } } }) {
        _id
        _rev
        store {
            title
        }
        ${modules}
        ${seo}
    }
}`;

export const pagesQuery = gql`
query pageBySlug($slug: String) {
    allPage(where: { slug: { current: { eq: $slug } } } ) {
        _id
        _rev
        title
        ${hero}
        ${modules}
        ${seo}
    }
}`;
