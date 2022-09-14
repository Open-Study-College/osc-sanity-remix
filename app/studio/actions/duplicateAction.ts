import type { DocumentActionProps } from 'sanity/desk';
import { DuplicateAction } from 'sanity/desk';
import { LOCKED_DOCUMENT_IDS } from '~/studio/constants';

interface DuplicateDocumentActionProps extends DocumentActionProps {
    disabled?: boolean;
}

export const duplicateAction = (props: DuplicateDocumentActionProps) => {
    const action = DuplicateAction(props);

    if (LOCKED_DOCUMENT_IDS.includes(props.type)) {
        return { disabled: true, ...action };
    }

    return { ...action };
};
