import type { module } from '~/types';
import { Container } from '@chakra-ui/react';
import ContentModule from './modules/Content';
import MediaTextModule from './modules/MediaText';

export default function Module({ module }: { module: module }) {
    switch (module._type) {
        case 'module.content':
            return (
                <Container maxW="container.md">
                    <ContentModule content={module.bodyRaw} />
                </Container>
            );
        case 'module.mediaText':
            return <MediaTextModule module={module} />;
        default:
            return null;
    }
}
