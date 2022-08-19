import { PackageIcon } from '@sanity/icons';

export default {
    name: 'collectionGroup',
    title: 'Collection group',
    type: 'object',
    icon: PackageIcon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'collectionLinks',
            title: 'Collection links',
            type: 'array',
            validation: (Rule) => Rule.unique().max(4),
            of: [
                {
                    name: 'collection',
                    type: 'reference',
                    weak: true,
                    to: [{ type: 'collection' }]
                }
            ]
        },
        {
            name: 'collectionProducts',
            title: 'Collection products',
            type: 'reference',
            description: 'Products from this collection will be listed',
            weak: true,
            to: [{ type: 'collection' }]
        }
    ]
};
