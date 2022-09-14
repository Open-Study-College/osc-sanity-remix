/**
 * Custom document action
 *
 * Learn more: https://www.sanity.io/docs/document-actions
 */
import { useClient } from 'sanity';
import { TrashIcon } from '@sanity/icons';
import { Stack, Text, useToast } from '@sanity/ui';
import { useState } from 'react';
import { SANITY_API_VERSION } from '~/studio/constants';

type Props = {
    draft?: Record<string, any>; // Sanity Document
    onComplete: () => void;
    published?: Record<string, any>; // Sanity Document
    type: string;
};

const deleteProductAndVariants = (props: Props) => {
    const { draft, onComplete, published } = props;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dialogOpen, setDialogOpen] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const client = useClient();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toast = useToast();

    return {
        tone: 'critical',
        modal: dialogOpen && {
            tone: 'critical',
            header: 'Delete current product and associated variants?',
            message: (
                <Stack space={4}>
                    <Text>
                        Delete the current product and all associated variants in your dataset.
                    </Text>
                    <Text weight="medium">No content on Shopify will be deleted.</Text>
                </Stack>
            ),
            onCancel: onComplete,
            onConfirm: async () => {
                const productId = published?.store?.id;

                // Find product variant documents with matching Shopify Product ID
                let productVariantIds: string[] = [];
                if (productId) {
                    productVariantIds = await client
                        .withConfig({ apiVersion: SANITY_API_VERSION })
                        .fetch(
                            `*[
                _type == "productVariant"
                && store.productId == $productId
              ]._id`,
                            { productId: productId }
                        );
                }

                // Delete current document (including draft)
                const transaction = client.transaction();
                if (published?._id) {
                    transaction.delete(published._id);
                }
                if (draft?._id) {
                    transaction.delete(draft._id);
                }

                // Delete all product variants with matching IDs
                productVariantIds?.forEach((documentId) => {
                    if (documentId) {
                        transaction.delete(documentId);
                        transaction.delete(`drafts.${documentId}`);
                    }
                });

                try {
                    await transaction.commit();
                    // Navigate back to products root
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

export default deleteProductAndVariants;
