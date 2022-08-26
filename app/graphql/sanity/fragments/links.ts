export const linkInternal = `
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

export const linkExternal = `
... on LinkExternal {
    _key
    title
    url
    newWindow
}`;
