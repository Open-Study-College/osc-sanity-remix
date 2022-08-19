export default {
    name: 'productPriceRange',
    title: 'Price range',
    type: 'object',
    options: {
        columns: 2
    },
    fields: [
        {
            name: 'minVariantPrice',
            title: 'Min variant price',
            type: 'number'
        },
        {
            name: 'maxVariantPrice',
            title: 'Max variant price',
            type: 'number'
        }
    ]
};
