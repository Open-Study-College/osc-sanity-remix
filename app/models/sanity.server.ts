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
            ${hero}
            ${modules}
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
            ${modules}
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
            ${hero}
            ${modules}
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

export const queryHomePage = async () => {
    try {
        const page = await sanityConnector({
            // can't query on the single Product as you have to pass the ID to select it
            // We want to filter by the slug so have to use allProduct and this nasty looking query
            query: `
        query homePage($id: ID!) {
          Home(id: $id) {
            _id
            ${hero}
            ${seo}
          }
        }`,

            variables: {
                id: 'home'
            }
        });

        return page;
    } catch (err) {
        console.error(err);
    }
};

export const querySiteSettings = async () => {
    try {
        const settings = await sanityConnector({
            query: `
        query settings($id: ID!) {
            Settings(id: $id) {
                menu {
                    links {
                        __typename
                        ${linkInternal}
                        ${LinkExternal}
                    }
                }

                footer {
                    links {
                        __typename
                        ${linkInternal}
                        ${LinkExternal}
                    }
                    textRaw
                }
            }
        }
        `,
            variables: {
                id: 'settings'
            }
        });

        return settings;
    } catch (err) {
        console.error(err);
    }
};

export const queryInternalUrl = async (ref = '') => {
    try {
        let query = '';
        const isShopifyProduct = ref.includes('shopifyProduct');
        const isShopifyCollection = ref.includes('shopifyCollection');

        if (isShopifyProduct) {
            query = `
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
        } else if (isShopifyCollection) {
            query = `
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
        } else {
            query = `
            query page($id: ID!) {
                Page(id: $id) {
                    slug {
                        current
                    }
                }
            }
        `;
        }

        const slug = await sanityConnector({
            query,
            variables: {
                id: ref
            }
        });

        console.log(slug);

        return slug;
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

const linkInternal = `
... on LinkInternal {
    _key
    title
    reference {
        __typename
        ... on Collection {
            store {
                title
                slug {
                    current
                }
            }
        }
        ... on Page {
            _key
            title
            slug {
                current
            }
        }
    ... on Product {
        _key
        store {
            title
            slug {
                current
            }
            }
        }
    }
}`;

const LinkExternal = `
... on LinkExternal {
    _key
    title
    url
    newWindow
}`;

const hero = `
showHero
hero {
    image {
        asset {
          url
          altText
        }
      }
    bodyRaw
    links {
        __typename
        ${linkInternal}
        ${LinkExternal}
    }
}
`;

const modules = `
    modules {
			... on ModuleContent {
         _type
        _key
        bodyRaw
      }
    }
`;
