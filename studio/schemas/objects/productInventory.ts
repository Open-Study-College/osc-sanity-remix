export default {
    name: 'productInventory',
    title: 'Inventory',
    type: 'object',
    options: {
        columns: 3
    },
    fields: [
        // Quantity
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'number'
        },
        // Management
        {
            name: 'management',
            title: 'Management',
            type: 'string'
        },
        // Policy
        {
            name: 'policy',
            title: 'Policy',
            type: 'string'
        }
    ]
};
