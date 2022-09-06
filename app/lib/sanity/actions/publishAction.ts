import type { DocumentActionComponent } from 'sanity/desk';
import { PublishAction } from 'sanity/desk';
import shopifyLink from './shopifyLink';

export const publishAction: DocumentActionComponent = (props) => {
    const { ...rest } = PublishAction(props);

    return shopifyLink;
};
