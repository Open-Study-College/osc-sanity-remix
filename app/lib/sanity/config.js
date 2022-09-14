import {
    SANITY_STUDIO_API_PROJECT_ID,
    SANITY_STUDIO_API_DATASET,
    SANITY_API_VERSION
} from '~/studio/constants';

export const config = {
    apiVersion: SANITY_API_VERSION, // see studio/contstants.js
    projectId: SANITY_STUDIO_API_PROJECT_ID,
    dataset: SANITY_STUDIO_API_DATASET,
    useCdn: true
};
