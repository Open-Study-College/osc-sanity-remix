import type { PortableTextBlock } from '@portabletext/types';
import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';
import { SimpleGrid, Heading, Stack, Text } from '@chakra-ui/react';
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
        body: PortableTextBlock;
        links?: SanityRawLinkItem[];
    };
}

// Pass ChakraUI components into the portable text items
const portableTextComponents: PortableTextComponents = {
    block: {
        h1: ({ children }) => <Heading as="h1">{children}</Heading>,
        h2: ({ children }) => <Heading as="h2">{children}</Heading>,
        h3: ({ children }) => <Heading as="h3">{children}</Heading>,
        normal: ({ children }) => <Text>{children}</Text>
    }
};

export default function Hero({ settings }: Props) {
    return (
        <>
            <header className="u-bg-secondary">
                <SimpleGrid columns={2} spacing={10} minChildWidth="340px">
                    <Stack p={12} spacing={6} color="white">
                        {settings.body ? (
                            <PortableText
                                value={settings.body}
                                components={portableTextComponents}
                            />
                        ) : null}

                        {settings.links?.length > 0 ? <ButtonGroup links={settings.links} /> : null}
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
