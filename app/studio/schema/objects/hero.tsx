import { defineField, defineType } from 'sanity';

export const hero = defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        // Media
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image'
        }),
        // Content
        defineField({
            name: 'body',
            title: 'Body',
            type: 'body'
        }),
        // Link
        defineField({
            name: 'links',
            title: 'Link',
            type: 'array',
            of: [{ type: 'linkInternal' }, { type: 'linkExternal' }],
            validation: (Rule) => Rule.max(2)
        })
    ]
});
