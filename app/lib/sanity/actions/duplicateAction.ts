import type { DocumentActionComponent } from 'sanity/desk';
import { DuplicateAction } from 'sanity/desk';
import { LOCKED_DOCUMENT_IDS } from '../constants';

export const duplicateAction: DocumentActionComponent = (props) => {
    const { disabled, ...rest } = DuplicateAction(props);

    if (LOCKED_DOCUMENT_IDS.includes(props.type)) {
        return { disabled: true, ...rest };
    }

    return { ...rest };
};
