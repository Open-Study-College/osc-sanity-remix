import { sanityConnector } from '~/lib/graphqlConnectors.server';

export const queryCollectionsBySlug = async (slug = '') => {
    if (!slug) console.error('⚠️ Slug is missing or incorrect');

    try {
        const collection = await sanityConnector({
            // can't query on the single Product as you have to pass the ID to select it
            // We want to filter by the slug so have to use allProduct and this nasty looking query
            query: `
        query collectionBySlug($slug: String) {
          allCollection(where: { store: { slug: { current: { eq: $slug } } } }) {
            store {
              title
            }
            ${seo}
          }
        }`,

            variables: {
                slug
            }
        });

        return collection;
    } catch (err) {
        console.error(err);
    }
};

export const queryProductsBySlug = async (slug = '') => {
    if (!slug) console.error('⚠️ Slug is missing or incorrect');

    try {
        const product = await sanityConnector({
            // can't query on the single Product as you have to pass the ID to select it
            // We want to filter by the slug so have to use allProduct and this nasty looking query
            query: `
        query productBySlug($slug: String) {
          allProduct(where: { store: { slug: { current: { eq: $slug } } } }) {
            store {
              title
            }
            ${seo}
          }
        }`,

            variables: {
                slug
            }
        });

        return product;
    } catch (err) {
        console.error(err);
    }
};

export const queryPagesBySlug = async (slug = '') => {
    if (!slug) console.error('⚠️ Slug is missing or incorrect');

    try {
        const page = await sanityConnector({
            // can't query on the single Product as you have to pass the ID to select it
            // We want to filter by the slug so have to use allProduct and this nasty looking query
            query: `
        query pageBySlug($slug: String) {
          allPage(where: { slug: { current: { eq: $slug } } } ) {
            title
            ${seo}
          }
        }`,

            variables: {
                slug
            }
        });

        return page;
    } catch (err) {
        console.error(err);
    }
};

export const queryHomePage = async (id = '') => {
    if (!id) console.error('⚠️ ID is missing or incorrect');

    try {
        const page = await sanityConnector({
            // can't query on the single Product as you have to pass the ID to select it
            // We want to filter by the slug so have to use allProduct and this nasty looking query
            query: `
        query homePage($id: ID!) {
          Home(id: $id) {
            _id
            ${seo}
          }
        }`,

            variables: {
                id
            }
        });

        return page;
    } catch (err) {
        console.error(err);
    }
};

const seo = `
seo {
  title
  description
  image {
    asset {
      url
    }
  }
}`;
