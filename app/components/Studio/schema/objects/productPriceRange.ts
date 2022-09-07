import { defineField, defineType } from 'sanity';

export const productPriceRange = defineType({
    name: 'productPriceRange',
    title: 'Price range',
    type: 'object',
    options: {
        columns: 2
    },
    fields: [
        defineField({
            name: 'minVariantPrice',
            title: 'Min variant price',
            type: 'number'
        }),
        defineField({
            name: 'maxVariantPrice',
            title: 'Max variant price',
            type: 'number'
        })
    ]
});
