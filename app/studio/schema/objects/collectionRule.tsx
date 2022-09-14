import { defineField, defineType } from 'sanity';
import { FilterIcon } from '@sanity/icons';

export const collectionRule = defineType({
    title: 'Collection rule',
    name: 'rule',
    type: 'object',
    icon: FilterIcon,
    readOnly: true,
    fields: [
        // Column
        defineField({
            title: 'Column',
            name: 'column',
            type: 'string'
        }),
        // Values
        defineField({
            title: 'Relation',
            name: 'relation',
            type: 'string'
        }),
        // Condition
        defineField({
            title: 'Condition',
            name: 'condition',
            type: 'string'
        })
    ],
    preview: {
        select: {
            condition: 'condition',
            name: 'column',
            relation: 'relation'
        },
        prepare(selection: Record<string, any>) {
            const { condition, name, relation } = selection;

            return {
                subtitle: `${relation} ${condition}`,
                title: name
            };
        }
    }
});
