// Export our project ID and dataset as constants
// Becuase this needs to work on both the server and the browser we need to check for the document being defined https://remix.run/docs/en/v1/guides/constraints#document-guard
// The document.env should be set in the root.tsx file so we can access it across all routes
export const SANITY_STUDIO_API_PROJECT_ID =
    typeof document !== 'undefined'
        ? document.env.SANITY_STUDIO_API_PROJECT_ID
        : process.env.SANITY_STUDIO_API_PROJECT_ID;

export const SANITY_STUDIO_API_DATASET =
    typeof document !== 'undefined'
        ? document.env.SANITY_STUDIO_API_DATASET
        : process.env.SANITY_STUDIO_API_DATASET;

// Currency code (ISO 4217) to use when displaying prices in the studio
// https://en.wikipedia.org/wiki/ISO_4217
export const DEFAULT_CURRENCY_CODE = 'GBP';

// Document ids which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_IDS = ['home', 'settings', 'product', 'productVariant', 'collection'];

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = ['media.tag'];

// References to include in 'internal' links
export const PAGE_REFERENCES = [
    { type: 'collection' },
    { type: 'home' },
    { type: 'page' },
    { type: 'product' }
];

// API version to use when using the Sanity client within the studio
// https://www.sanity.io/help/studio-client-specify-api-version
export const SANITY_API_VERSION = '2021-10-21';
