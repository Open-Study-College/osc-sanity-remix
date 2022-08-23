import type { PortableTextBlock } from '@portabletext/types';
import { PortableText } from '@portabletext/react';
import ButtonGroup from '../buttongroup/ButtonGroup';
import type { SanityRawLinkItem } from '~/types';

interface Props {
    settings: {
        image?: {
            asset: {
                url: string;
                altText: string;
            };
        };
        bodyRaw: PortableTextBlock;
        links?: SanityRawLinkItem[];
    };
}

export default function Hero({ settings }: Props) {
    return (
        <>
            <header>
                {settings.image ? (
                    <img src={settings.image.asset.url} alt={settings.image.asset.altText} />
                ) : null}

                {settings.bodyRaw ? <PortableText value={settings.bodyRaw} /> : null}

                {settings.links?.length > 0 ? <ButtonGroup links={settings.links} /> : null}
            </header>
        </>
    );
}
