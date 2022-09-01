import sanityClient from '@sanity/client';

import { config } from './config.server';

// Standard client for fetching data
export const client = sanityClient(config);

// Authenticated client for fetching draft documents
export const previewClient = sanityClient({
    ...config,
    useCdn: false
});

// Helper function to choose the correct client
export const getClient = (usePreview = false) => (usePreview ? previewClient : client);
