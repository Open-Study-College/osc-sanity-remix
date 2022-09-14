import { TagIcon } from '@sanity/icons';
import pluralize from 'pluralize';
import { defineField, defineType } from 'sanity';
import ShopifyIcon from '~/studio/components/icons/Shopify';
import ProductHiddenInput from '~/studio/components/inputs/ProductHidden';
import ShopifyDocumentStatus from '~/studio/components/media/ShopifyDocumentStatus';
import { getPriceRange } from '~/studio/utils/getPriceRange';

const GROUPS = [
    {
        default: true,
        name: 'editorial',
        title: 'Editorial'
    },
    {
        name: 'shopifySync',
        title: 'Shopify sync',
        icon: ShopifyIcon
    },
    {
        name: 'seo',
        title: 'SEO'
    }
];

export const product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: TagIcon,
    groups: GROUPS,
    fields: [
        // Product hidden status
        defineField({
            name: 'hidden',
            type: 'string',
            components: {
                input: ProductHiddenInput
            },
            group: GROUPS.map((group) => group.name),
            hidden: ({ parent }) => {
                const isActive = parent?.store?.status === 'active';
                const isDeleted = parent?.store?.isDeleted;
                return isActive && !isDeleted;
            }
        }),
        // Modules
        defineField({
            name: 'modules',
            title: 'Modules',
            type: 'array',
            description: 'Editorial modules to associate with this product',
            of: [{ type: 'module.mediaText' }, { type: 'module.content' }],
            group: 'editorial'
        }),
        // Shopify product
        defineField({
            name: 'store',
            title: 'Shopify',
            type: 'shopifyProduct',
            description: 'Product data from Shopify (read-only)',
            group: 'shopifySync'
        }),
        // SEO
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo.shopify',
            group: 'seo'
        })
    ],
    orderings: [
        {
            name: 'titleAsc',
            title: 'Title (A-Z)',
            by: [{ field: 'store.title', direction: 'asc' }]
        },
        {
            name: 'titleAsc',
            title: 'Title (Z-A)',
            by: [{ field: 'store.title', direction: 'desc' }]
        },
        {
            name: 'titleAsc',
            title: 'Price (Highest first)',
            by: [{ field: 'store.priceRange.minVariantPrice', direction: 'desc' }]
        },
        {
            name: 'titleAsc',
            title: 'Title (Lowest first)',
            by: [{ field: 'store.priceRange.minVariantPrice', direction: 'asc' }]
        }
    ],
    preview: {
        select: {
            isDeleted: 'store.isDeleted',
            optionCount: 'store.options.length',
            previewImageUrl: 'store.previewImageUrl',
            priceRange: 'store.priceRange',
            status: 'store.status',
            title: 'store.title',
            variantCount: 'store.variants.length'
        },
        prepare(selection: Record<string, any>) {
            const {
                isDeleted,
                optionCount,
                previewImageUrl,
                priceRange,
                status,
                title,
                variantCount
            } = selection;

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
                        url={previewImageUrl}
                    />
                ),
                description: description.join(' / '),
                subtitle,
                title
            };
        }
    }
});
