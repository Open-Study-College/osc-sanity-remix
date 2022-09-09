import { defineField, defineType } from 'sanity';

export const page = defineType({
    name: 'seo.page',
    title: 'SEO',
    type: 'object',
    options: {
        collapsed: false,
        collapsible: true
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'placeholderString',
            description: 'If empty, displays the document title (title)',
            options: { field: 'title' },
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
