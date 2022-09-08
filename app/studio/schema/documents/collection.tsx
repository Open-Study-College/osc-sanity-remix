import { PackageIcon } from '@sanity/icons';
import pluralize from 'pluralize';
import { defineField, defineType } from 'sanity';
import ShopifyIcon from '~/studio/components/icons/Shopify';
import CollectionHiddenInput from '~/studio/components/inputs/CollectionHidden';
import ShopifyDocumentStatus from '~/studio/components/media/ShopifyDocumentStatus';

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

export const collection = defineType({
    name: 'collection',
    title: 'Collection',
    type: 'document',
    icon: PackageIcon,
    groups: GROUPS,
    fields: [
        // Product hidden status
        defineField({
            name: 'hidden',
            type: 'string',
            components: {
                input: CollectionHiddenInput
            },
            group: GROUPS.map((group) => group.name),
            hidden: ({ parent }) => {
                const isDeleted = parent?.store?.isDeleted;
                return !isDeleted;
            }
        }),
        // Show hero
        defineField({
            name: 'showHero',
            title: 'Show hero',
            type: 'boolean',
            description: 'If disabled, page title will be displayed instead',
            group: 'editorial'
        }),
        // Hero
        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'hero',
            hidden: ({ document }) => !document?.showHero,
            group: 'editorial'
        }),
        // Modules
        defineField({
            name: 'modules',
            title: 'Modules',
            type: 'array',
            description: 'Editorial modules to associate with this collection',
            of: [{ type: 'module.mediaText' }, { type: 'module.content' }],
            group: 'editorial'
        }),
        // Shopify collection
        defineField({
            name: 'store',
            title: 'Shopify',
            type: 'shopifyCollection',
            description: 'Collection data from Shopify (read-only)',
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
        }
    ],
    preview: {
        select: {
            imageUrl: 'store.imageUrl',
            isDeleted: 'store.isDeleted',
            ruleCount: 'store.rules.length',
            title: 'store.title'
        },
        prepare(selection) {
            const { imageUrl, isDeleted, ruleCount, title } = selection;
            return {
                media: (
                    <ShopifyDocumentStatus isDeleted={isDeleted} type="collection" url={imageUrl} />
                ),
                subtitle:
                    ruleCount > 0 ? `Automated (${pluralize('rule', ruleCount, true)})` : 'Manual',
                title
            };
        }
    }
});
