import type { DocumentActionProps } from 'sanity/desk';
import { DeleteAction } from 'sanity/desk';
import deleteCollection from './deleteCollection';
import deleteProductAndVariants from './deleteProductAndVariants';

interface DeleteDocumentActionProps extends DocumentActionProps {
    disabled?: boolean;
}

export const deleteAction = (props: DeleteDocumentActionProps) => {
    const action = DeleteAction(props);

    if (['home', 'settings'].includes(props.type)) {
        return { disabled: true, ...action };
    }

    //  Enable delete button only if item has been marked for deletion
    if (['productVariant'].includes(props.type)) {
        // @ts-ignore
        if (props?.published?.store?.isDeleted) {
            return { disabled: false, ...action };
        }
    }

    if (props.type === 'collection') {
        // @ts-ignore
        return deleteCollection(props);
    }

    if (props.type === 'product') {
        // @ts-ignore
        return deleteProductAndVariants(props);
    }

    return { ...action };
};
