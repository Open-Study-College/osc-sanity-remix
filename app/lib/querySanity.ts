const querySanity = async ({ query = '', variables = {} }) => {
    const { data } = await fetch(
        `https://${process.env.SANITY_STUDIO_API_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.SANITY_STUDIO_API_DATASET}/default`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.SANITY_STUDIO_API_TOKEN}`
            },
            body: JSON.stringify({
                query,
                variables
            })
        }
    )
        .then((response) => response.json())
        .catch((error) => console.error(error));

    return data;
};

export default querySanity;
