import { defineField, defineType } from 'sanity';

export const shopifyCollection = defineType({
    name: 'shopifyCollection',
    title: 'Shopify',
    type: 'object',
    options: {
        collapsed: false,
        collapsible: true
    },
    readOnly: true,
    fieldsets: [
        {
            name: 'status',
            title: 'Status',
            options: {
                columns: 2
            }
        }
    ],
    fields: [
        // Created at
        defineField({
            fieldset: 'status',
            name: 'createdAt',
            title: 'Created at',
            type: 'string'
        }),
        // Updated at
        defineField({
            fieldset: 'status',
            name: 'updatedAt',
            title: 'Last updated at',
            type: 'string'
        }),
        // Deleted
        defineField({
            fieldset: 'status',
            name: 'isDeleted',
            title: 'Deleted from Shopify?',
            type: 'boolean'
        }),
        // Title
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        // Collection ID
        defineField({
            name: 'id',
            title: 'ID',
            type: 'number',
            description: 'Shopify Collection ID'
        }),
        // GID
        defineField({
            name: 'gid',
            title: 'GID',
            type: 'string',
            description: 'Shopify Collection GID'
        }),
        // Slug
        defineField({
            name: 'slug',
            title: 'Slug',
            description: 'Shopify Collection handle',
            type: 'slug',
            readOnly: true
        }),
        // Description
        defineField({
            name: 'descriptionHtml',
            title: 'HTML Description',
            type: 'text',
            rows: 5
        }),
        // Image URL
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'string'
        }),
        // Rules
        defineField({
            name: 'rules',
            title: 'Rules',
            type: 'array',
            description: 'Include Shopify products that satisfy these conditions',
            of: [{ type: 'rule' }],
            readOnly: true
        }),
        // Disjunctive rules
        defineField({
            name: 'disjunctive',
            title: 'Disjunctive rules?',
            description: 'Require any condition if true, otherwise require all conditions',
            type: 'boolean'
        }),
        // Sort order
        defineField({
            name: 'sortOrder',
            title: 'Sort order',
            type: 'string'
        })
    ]
});
