import { defineField, defineType } from 'sanity';

export const seo = defineType({
    name: 'settings.seo',
    title: 'SEO',
    type: 'object',
    description: 'Defaults for every page',
    options: {
        collapsed: false,
        collapsible: true
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Site title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            validation: (Rule) =>
                Rule.max(150).warning('Longer descriptions may be truncated by search engines')
        })
    ],
    validation: (Rule) => Rule.required()
});
