export const config = {
    apiVersion: '2021-06-07', // see studio/contstants.js
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_API_DATASET,
    token: process.env.SANITY_STUDIO_API_TOKEN ?? ``,
    useCdn: true
};
