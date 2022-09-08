import { useClient } from 'sanity';
import { SANITY_API_VERSION } from '~/studio/constants';

const SHOPIFY_SYNC_DOCUMENT_TYPE = 'sanity.shopify.sync';

export const useShopifyStoreId = async () => {
    const client = useClient();

    const storeId = await client
        .withConfig({ apiVersion: SANITY_API_VERSION })
        .fetch(`*[_type == $documentType] | order(_updatedAt desc)[0].store`, {
            documentType: SHOPIFY_SYNC_DOCUMENT_TYPE
        });

    return storeId;
};
