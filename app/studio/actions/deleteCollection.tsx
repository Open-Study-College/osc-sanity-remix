/**
 * Custom document action
 *
 * Learn more: https://www.sanity.io/docs/document-actions
 */
import { TrashIcon } from '@sanity/icons';
import { Stack, Text, useToast } from '@sanity/ui';
import { useClient } from 'sanity';
import { useState } from 'react';

type Props = {
    draft?: Record<string, any>; // Sanity Document
    onComplete: () => void;
    published?: Record<string, any>; // Sanity Document
    type: string;
};

const deleteCollection = (props: Props) => {
    const { draft, onComplete, published } = props;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const sanityClient = useClient();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dialogOpen, setDialogOpen] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toast = useToast();

    return {
        tone: 'critical',
        modal: dialogOpen && {
            tone: 'critical',
            header: 'Delete current collection?',
            message: (
                <Stack space={4}>
                    <Text>Delete the current collection in your dataset.</Text>
                    <Text weight="medium">No content on Shopify will be deleted.</Text>
                </Stack>
            ),
            onCancel: onComplete,
            onConfirm: async () => {
                // Delete current document (including draft)
                const transaction = sanityClient.transaction();
                if (published?._id) {
                    transaction.delete(published._id);
                }
                if (draft?._id) {
                    transaction.delete(draft._id);
                }

                try {
                    await transaction.commit();
                    // Navigate back to collections root
                    // TODO: useRouter not exported from sanity?
                } catch (err: any) {
                    toast.push({
                        status: 'error',
                        title: err?.message
                    });
                } finally {
                    // Signal that the action is complete
                    onComplete();
                }
            },
            type: 'confirm'
        },
        icon: TrashIcon,
        label: 'Delete',
        onHandle: () => setDialogOpen(true),
        shortcut: 'Ctrl+Alt+D'
    };
};

export default deleteCollection;
