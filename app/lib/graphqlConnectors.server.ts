const graphqlConnector = async ({
    url,
    headers,
    query,
    variables
}: {
    url: string;
    headers: HeadersInit;
    query: string;
    variables: object;
}) => {
    const { data } = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    })
        .then((response) => response.json())
        .catch((error) => console.error(error));

    return data;
};

export const sanityConnector = async ({
    query,
    variables
}: {
    query: string;
    variables: object;
}) => {
    const data = await graphqlConnector({
        url: `https://${process.env.SANITY_STUDIO_API_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.SANITY_STUDIO_API_DATASET}/default`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.SANITY_STUDIO_API_TOKEN}`
        },
        query,
        variables
    });

    return data;
};

export const shopifyConnector = async ({
    query,
    variables
}: {
    query: string;
    variables: object;
}) => {
    const data = await graphqlConnector({
        url: `https://${process.env.SHOPIFY_STORE_URL}/api/2022-07/graphql.json`,
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': `${process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN}`
        },
        query,
        variables
    });

    return data;
};
