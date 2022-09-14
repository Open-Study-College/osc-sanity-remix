import { defineField, defineType } from 'sanity';

export const shopify = defineType({
    name: 'seo.shopify',
    title: 'SEO',
    type: 'object',
    description: '',
    options: {
        collapsed: false,
        collapsible: true
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'placeholderString',
            description: 'If empty, displays the default Shopify document title (store.title)',
            options: {
                field: 'store.title'
            },
            validation: (Rule) =>
                Rule.max(50).warning('Longer titles may be truncated by search engines')
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            validation: (Rule) =>
                Rule.max(150).warning('Longer descriptions may be truncated by search engines')
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image'
        })
    ]
});
