import type { SanityPage, SanityCollectionPage } from '~/types';
import type { ConfigContext } from 'sanity';
import { isDev } from 'sanity';

interface Context extends ConfigContext {
    document: SanityPage | SanityCollectionPage;
}

export const resolvePreviewUrl = (context: Context) => {
    const { document } = context;

    const siteUrl = isDev ? 'http://localhost:3000' : 'https://osc-sanity-remix.fly.dev/';

    const params = new URLSearchParams();
    params.set('preview', 'true');

    switch (document._type) {
        case 'page':
            return document.slug ? `${siteUrl}/pages/${document.slug.current}?${params}` : null;

        case 'collection':
            return document.slug
                ? `${siteUrl}/collections/${document.store.slug.current}?${params}`
                : null;

        case 'product':
            return document.slug
                ? `${siteUrl}/products/${document.store.slug.current}?${params}`
                : null;

        default:
            return document.slug ? `${siteUrl}/?${params}` : null;
    }
};
