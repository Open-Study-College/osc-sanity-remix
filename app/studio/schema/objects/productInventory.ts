import { defineField, defineType } from 'sanity';

export const productInventory = defineType({
    name: 'productInventory',
    title: 'Inventory',
    type: 'object',
    options: {
        columns: 3
    },
    fields: [
        // Quantity
        defineField({
            name: 'quantity',
            title: 'Quantity',
            type: 'number'
        }),
        // Management
        defineField({
            name: 'management',
            title: 'Management',
            type: 'string'
        }),
        // Policy
        defineField({
            name: 'policy',
            title: 'Policy',
            type: 'string'
        })
    ]
});
