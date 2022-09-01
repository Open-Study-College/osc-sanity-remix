import type { PortableTextBlock } from '@portabletext/types';

export interface SanityRawLinkItem {
    __typename: string;
    _key: string;
    title: string;
    newWindow?: boolean;
    url?: string;
    reference?: {
        slug: {
            current: string;
        };
        title: string;
        __typename: string;
        _key: string | null;
    };
}

export interface SanityLinkItem {
    _type: string;
    _key: string;
    title: string;
}

export interface InternalSanityLinkItem extends SanityLinkItem {
    documentType?: string;
    slug?: string;
}

export interface ExternalSanityLinkItem extends SanityLinkItem {
    newWindow?: boolean;
    url?: string;
}

export interface module {
    _type: string;
    _key: string;
    body?: PortableTextBlock;
}

export interface mediaTextModule extends module {
    media?: {
        asset: {
            url: string;
            altText: string | null;
        };
    }[];
    links: SanityRawLinkItem[];
}

export interface SanityImage {
    asset: {
        url: string;
        altText: string;
    };
}

export interface SanityHero {
    image?: SanityImage;
    body: PortableTextBlock;
    links?: SanityRawLinkItem[] | null;
}

export interface SanitySEO {
    title: string;
    desciprion: string | null;
    image: SanityImage | null;
}

export interface SanityPage {
    _id: string;
    _rev: string;
    title?: string;
    seo: SanitySEO;
    hero: SanityHero;
    showHero: boolean;
    modules: module[] | mediaTextModule[];
}

export interface SanityCollectionPage extends SanityPage {
    store: {
        title: string;
    };
}

export interface shopifyProduct {
    id: string;
    title: string;
    handle: string;
    featuredImage: {
        altText: string;
        height: number;
        width: number;
        url: string;
    };
    compareAtPriceRange: {
        minVariantPrice: {
            amount: string;
            currencyCode: string;
        };
    };
    priceRange: {
        minVariantPrice: {
            amount: string;
            currencyCode: string;
        };
    };
    options: {
        values: string[];
        name: string;
    }[];
}
