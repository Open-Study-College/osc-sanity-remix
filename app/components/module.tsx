import type { module } from '~/types';
import ContentModule from './modules/Content';

export default function Module({ module }: { module: module }) {
    switch (module._type) {
        case 'module.content':
            return <ContentModule content={module.bodyRaw} />;
        default:
            return null;
    }
}
