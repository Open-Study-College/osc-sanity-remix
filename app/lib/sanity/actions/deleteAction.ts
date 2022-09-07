import type { DocumentActionComponent } from 'sanity/desk';
import { DeleteAction } from 'sanity/desk';
import deleteCollection from './deleteCollection';
import deleteProductAndVariants from './deleteProductAndVariants';

export const deleteAction: DocumentActionComponent = (props) => {
    const { disabled, ...rest } = DeleteAction(props);

    if (['home', 'settings'].includes(props.type)) {
        return { disabled: true, ...rest };
    }

    //  Enable delete button only if item has been marked for deletion
    if (['productVariant'].includes(props.type)) {
        if (props?.published?.store?.isDeleted) {
            return { disabled: false, ...rest };
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

    return { ...rest };
};
