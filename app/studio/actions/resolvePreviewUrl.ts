import type { SanityDocument } from 'sanity';

interface Document extends SanityDocument {
    slug: {
        current: string;
    };

    store?: {
        slug: {
            current: string;
        };
    };
}

export const resolvePreviewUrl = (document: Document) => {
    //? Good idea?
    const siteUrl = window.location.origin;

    const params = new URLSearchParams();
    params.set('preview', 'true');

    switch (document._type) {
        case 'page':
            if (!document.slug) {
                throw new Error(`Document has no slug, cannot preview`);
            }

            return document.slug ? `${siteUrl}/pages/${document.slug.current}?${params}` : null;

        case 'collection':
            if (!document.store) {
                throw new Error(`Document has no slug, cannot preview`);
            }

            return document.store.slug
                ? `${siteUrl}/collections/${document.store.slug.current}?${params}`
                : null;

        case 'product':
            if (!document.store) {
                throw new Error(`Document has no slug, cannot preview`);
            }

            return document.store.slug
                ? `${siteUrl}/products/${document.store.slug.current}?${params}`
                : null;

        case 'home':
            return `${siteUrl}/?${params}`;

        default:
            break;
    }
};
