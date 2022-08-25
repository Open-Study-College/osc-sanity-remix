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
    __typename: string;
    _key: string;
    title: string;
    url: string;
    newWindow?: boolean;
}

export interface module {
    _type: string;
    _key: string;
    bodyRaw?: PortableTextBlock;
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
