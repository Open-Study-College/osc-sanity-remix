import { TagIcon } from '@sanity/icons';
import pluralize from 'pluralize';
import { defineField, defineType } from 'sanity';
import ShopifyDocumentStatus from '~/studio/components/media/ShopifyDocumentStatus';
import { getPriceRange } from '~/studio/utils/getPriceRange';

// eslint-disable-next-line react-hooks/rules-of-hooks -- this is being imported into a React component
// const sanityClient = useClient();

export const productWithVariant = defineType({
    name: 'productWithVariant',
    title: 'Product with variant',
    type: 'object',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'product',
            type: 'reference',
            to: [{ type: 'product' }],
            weak: true
        }),
        defineField({
            name: 'variant',
            type: 'reference',
            to: [{ type: 'productVariant' }],
            weak: true,
            description: 'First variant will be selected if left empty',
            options: {
                // @ts-ignore - incomplete type definition for defineField? Should allow more than just strings
                filter: ({ parent }) => {
                    console.log(parent);
                    // @ts-ignore
                    const productId = parent?.product?._ref;
                    const shopifyProductId = Number(productId?.replace('shopifyProduct-', ''));

                    if (!shopifyProductId) {
                        return { filter: '', params: {} };
                    }

                    // TODO: once variants are correctly marked as deleted, this could be made a little more efficient
                    // e.g. filter: 'store.productId == $shopifyProductId && !store.isDeleted',
                    return {
                        filter: `_id in *[_id == $shopifyProductId][0].store.variants[]._ref`,
                        params: {
                            shopifyProductId: productId
                        }
                    };
                }
            },
            hidden: ({ parent }) => {
                const productSelected = parent?.product;
                return !productSelected;
            },
            validation: (Rule) =>
                Rule.custom(async (value, { parent }) => {
                    // Selected product in adjacent `product` field
                    // @ts-ignore
                    const productId = parent?.product?._ref;

                    // Selected product variant
                    // @ts-ignore
                    const productVariantId = value?._ref;

                    if (!productId || !productVariantId) {
                        return true;
                    }

                    // If both product + product variant are specified,
                    // check to see if `product` references this product variant.
                    // const result = await sanityClient
                    //     .withConfig({ apiVersion: SANITY_API_VERSION })
                    //     .fetch(`*[_id == $productId && references($productVariantId)][0]._id`, {
                    //         productId,
                    //         productVariantId
                    //     });

                    return !productId || !productVariantId ? true : 'Invalid product variant';
                })
        })
    ],
    preview: {
        select: {
            defaultVariantTitle: 'product.store.variants.0.store.title',
            isDeleted: 'product.store.isDeleted',
            optionCount: 'product.store.options.length',
            previewImageUrl: 'product.store.previewImageUrl',
            priceRange: 'product.store.priceRange',
            status: 'product.store.status',
            title: 'product.store.title',
            variantCount: 'product.store.variants.length',
            variantPreviewImageUrl: 'variant.store.previewImageUrl',
            variantTitle: 'variant.store.title'
        },
        prepare(selection: Record<string, any>) {
            const {
                defaultVariantTitle,
                isDeleted,
                optionCount,
                previewImageUrl,
                priceRange,
                status,
                title,
                variantCount,
                variantPreviewImageUrl,
                variantTitle
            } = selection;

            const productVariantTitle = variantTitle || defaultVariantTitle;

            let previewTitle = [title];
            if (productVariantTitle) {
                previewTitle.push(`[${productVariantTitle}]`);
            }

            let description = [
                variantCount ? pluralize('variant', variantCount, true) : 'No variants',
                optionCount ? pluralize('option', optionCount, true) : 'No options'
            ];

            let subtitle = getPriceRange(priceRange);
            if (status !== 'active') {
                subtitle = '(Unavailable in Shopify)';
            }
            if (isDeleted) {
                subtitle = '(Deleted from Shopify)';
            }

            return {
                media: (
                    <ShopifyDocumentStatus
                        isActive={status === 'active'}
                        isDeleted={isDeleted}
                        type="product"
                        url={variantPreviewImageUrl || previewImageUrl}
                    />
                ),
                description: description.join(' / '),
                subtitle,
                title: previewTitle.join(' ')
            };
        }
    }
});
