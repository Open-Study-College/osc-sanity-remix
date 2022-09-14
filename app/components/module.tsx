import type { module, contentModule, mediaTextModule } from '~/types';
import { Container } from '@chakra-ui/react';
import ContentModule from './modules/Content';
import MediaTextModule from './modules/MediaText';

export default function Module({ module }: { module: module }) {
    switch (module._type) {
        case 'module.content':
            const moduleContent = module as contentModule;

            return (
                <Container maxW="container.md">
                    {moduleContent.body ? <ContentModule content={moduleContent.body} /> : null}
                </Container>
            );

        case 'module.mediaText':
            const moduleMedia = module as mediaTextModule;

            return <MediaTextModule module={moduleMedia} />;

        default:
            return null;
    }
}
