import { defineField, defineType } from 'sanity';

export const menu = defineType({
    name: 'settings.menu',
    title: 'Menu',
    type: 'object',
    fields: [
        // Links
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{ type: 'linkInternal' }, { type: 'linkExternal' }]
        })
    ]
});
