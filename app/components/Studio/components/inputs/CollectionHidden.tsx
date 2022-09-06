import type { SanityDocument } from '@sanity/client';
import { WarningOutlineIcon } from '@sanity/icons';
import { Box, Card, Flex, Stack, Text } from '@sanity/ui';
import { forwardRef, useEffect, useState } from 'react';
import { useShopifyStoreId } from '~/lib/sanity/hooks/useShopifyStoreId';
import { collectionUrl } from '~/lib/sanity/utils/shopifyUrls';

type Props = {
    document: SanityDocument;
};
const CollectionHiddenInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { document } = props;

    const [shopifyCollectionUrl, setShopifyCollectionUrl] = useState<string>();
    const storeId = useShopifyStoreId();

    const isDeleted = document?.store?.isDeleted;

    useEffect(() => {
        storeId.then((id) => {
            if (id) {
                setShopifyCollectionUrl(collectionUrl(id, document?.store?.id));
            }
        });
    }, []);

    return (
        <Card padding={4} radius={2} ref={ref} shadow={1} tone="critical">
            <Flex align="flex-start">
                <Text size={2}>
                    <WarningOutlineIcon />
                </Text>
                <Box flex={1} marginLeft={3}>
                    <Box>
                        <Text size={2} weight="semibold">
                            This collection is hidden
                        </Text>
                    </Box>
                    <Stack marginTop={4} space={2}>
                        <Text size={1}>It has been deleted from Shopify.</Text>
                    </Stack>
                    {!isDeleted && shopifyCollectionUrl && (
                        <Box marginTop={4}>
                            <Text size={1}>
                                →{' '}
                                <a href={shopifyCollectionUrl} target="_blank" rel="noreferrer">
                                    View this collection on Shopify
                                </a>
                            </Text>
                        </Box>
                    )}
                </Box>
            </Flex>
        </Card>
    );
});

export default CollectionHiddenInput;
