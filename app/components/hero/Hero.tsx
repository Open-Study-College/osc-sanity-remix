import type { PortableTextBlock } from '@portabletext/types';
import PortableText from '~/components/portableText/PortableText';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import ButtonGroup from '../buttongroup/ButtonGroup';
import type { InternalSanityLinkItem, ExternalSanityLinkItem } from '~/types';

interface Props {
    settings: {
        image?:
            | {
                  asset: {
                      url: string;
                      altText: string;
                  };
              }
            | undefined;
        body?: PortableTextBlock | undefined;
        links?: InternalSanityLinkItem[] | ExternalSanityLinkItem[] | undefined;
    };
}

export default function Hero({ settings }: Props) {
    return (
        <>
            <header className="u-bg-secondary">
                <SimpleGrid columns={2} spacing={10} minChildWidth="340px">
                    <Stack p={12} spacing={6} color="white">
                        {settings.body ? <PortableText value={settings.body} /> : null}

                        {settings.links && settings.links?.length > 0 ? (
                            <ButtonGroup links={settings.links} />
                        ) : null}
                    </Stack>

                    <div>
                        {settings.image ? (
                            <img
                                src={settings.image.asset.url}
                                alt={settings.image.asset.altText}
                            />
                        ) : null}
                    </div>
                </SimpleGrid>
            </header>
        </>
    );
}
