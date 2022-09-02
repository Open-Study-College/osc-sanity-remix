import { EditIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const content = defineType({
    name: 'module.content',
    title: 'Content',
    type: 'object',
    icon: EditIcon,
    fields: [
        defineField({
            name: 'body',
            title: 'Body',
            type: 'body'
        })
    ],
    preview: {
        select: {
            title: 'body'
        },
        prepare(selection) {
            const title = selection.title[0].children[0].text; // display the first item from the body content

            return {
                subtitle: 'Content',
                title
            };
        }
    }
});
