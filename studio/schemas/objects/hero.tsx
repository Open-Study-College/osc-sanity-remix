export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        // Media
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            feilds: []
        },
        // Content
        {
            name: 'body',
            title: 'Body',
            type: 'body'
        },
        // Link
        {
            name: 'links',
            title: 'Link',
            type: 'array',
            of: [{ type: 'linkInternal' }, { type: 'linkExternal' }],
            validation: (Rule) => Rule.max(2)
        }
    ]
};
