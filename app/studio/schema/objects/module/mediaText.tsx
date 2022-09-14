import { BlockElementIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const mediaText = defineType({
    name: 'module.mediaText',
    title: 'Media / Text',
    type: 'object',
    icon: BlockElementIcon,
    fieldsets: [
        {
            name: 'settings',
            title: 'Settings'
        },
        {
            name: 'content',
            title: 'Content'
        }
    ],
    fields: [
        // Layout
        defineField({
            name: 'layout',
            title: 'Layout direction',
            type: 'string',
            fieldset: 'settings',
            initialValue: 'left',
            options: {
                direction: 'horizontal',
                layout: 'radio',
                list: [
                    {
                        title: 'Media / Text',
                        value: 'media-left'
                    },
                    {
                        title: 'Text / Media',
                        value: 'media-right'
                    }
                ]
            },
            validation: (Rule) => Rule.required()
        }),
        // Body
        defineField({
            name: 'body',
            title: 'Body',
            type: 'body',
            fieldset: 'content'
        }),
        // Link
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            fieldset: 'content',
            of: [{ type: 'linkInternal' }, { type: 'linkExternal' }],
            validation: (Rule) => Rule.max(2)
        }),
        // Media
        defineField({
            name: 'media',
            title: 'Media',
            type: 'image'
        })
    ],
    preview: {
        select: {
            title: 'body',
            layout: 'layout'
        },
        prepare(selection: Record<string, any>) {
            const title = selection.title[0].children[0].text; // display the first item from the body content;
            const layout = selection.layout.replace('-', ' / ');

            return {
                subtitle: layout,
                title
            };
        }
    }
});
