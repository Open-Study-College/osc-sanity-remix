import type { mediaTextModule } from '~/types';
import ContentModule from './Content';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ButtonGroup from '../buttongroup/ButtonGroup';

export default function MediaTextModule({ module }: { module: mediaTextModule }) {
    const { layout, body, links, media } = module;

    return (
        <SimpleGrid
            columns={2}
            spacing={10}
            minChildWidth="340px"
            mx="auto"
            className="o-container media-text-module"
        >
            {layout === 'media-left' && media ? (
                <Box>
                    <img src={media.asset.url} alt={media.asset.altText} />
                </Box>
            ) : null}

            <Box>
                <Box px={12}>
                    <ContentModule content={body} />
                </Box>

                <Box p={12}>{links ? <ButtonGroup links={links} /> : null}</Box>
            </Box>

            {layout === 'media-right' && media ? (
                <Box>
                    <img src={media.asset.url} alt={media.asset.altText} />
                </Box>
            ) : null}
        </SimpleGrid>
    );
}
