export default {
    name: 'settings.notFoundPage',
    title: '404 page',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'body',
            title: 'Body',
            type: 'text',
            rows: 2
        },
        {
            name: 'collection',
            title: 'Collection',
            type: 'reference',
            description: 'Collection products displayed on this page',
            weak: true,
            to: [
                {
                    name: 'collection',
                    type: 'collection'
                }
            ]
        }
        // Color theme
        // {
        //   name: "colorTheme",
        //   title: "Color theme",
        //   type: "reference",
        //   to: [{ type: "colorTheme" }],
        // },
    ]
};
