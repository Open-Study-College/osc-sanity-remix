import type { module } from '~/types';
import { Container } from '@chakra-ui/react';
import ContentModule from './modules/Content';
import MediaTextModule from './modules/MediaText';

export default function Module({ module }: { module: module }) {
    switch (module._type) {
        case 'module.content':
            return (
                <Container maxW="container.md">
                    {module.body ? <ContentModule content={module.body} /> : null}
                </Container>
            );
        case 'module.mediaText':
            return <>{'layout' in module ? <MediaTextModule module={module} /> : null}</>;
        default:
            return null;
    }
}
