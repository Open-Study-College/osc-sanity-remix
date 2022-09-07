import type { SanityPage, SanityCollectionPage } from '~/types';
import type { ConfigContext } from 'sanity';

interface Context extends ConfigContext {
    document: SanityPage | SanityCollectionPage;
}

export const resolvePreviewUrl = (prev: any, context: Context) => {
    const { document } = context;

    //? Good idea?
    const siteUrl = window.location.origin;

    const params = new URLSearchParams();
    params.set('preview', 'true');

    switch (document._type) {
        case 'page':
            return document.slug ? `${siteUrl}/pages/${document.slug.current}?${params}` : null;

        case 'collection':
            return document.store.slug
                ? `${siteUrl}/collections/${document.store.slug.current}?${params}`
                : null;

        case 'product':
            return document.store.slug
                ? `${siteUrl}/products/${document.store.slug.current}?${params}`
                : null;

        case 'home':
            return `${siteUrl}/?${params}`;

        default:
            return prev;
    }
};
