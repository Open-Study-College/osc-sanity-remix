import type { ReactElement } from 'react';

export default {
    name: 'body',
    title: 'Rich Text',
    type: 'array',
    of: [
        {
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' }
            ],
            marks: {
                annotations: [
                    // Email
                    {
                        name: 'annotationLinkEmail',
                        type: 'annotationLinkEmail'
                    },
                    // Internal link
                    {
                        name: 'annotationLinkInternal',
                        type: 'annotationLinkInternal'
                    },
                    // URL
                    {
                        name: 'annotationLinkExternal',
                        type: 'annotationLinkExternal'
                    }
                ],
                decorators: [
                    {
                        title: 'Italic',
                        value: 'em'
                    },
                    {
                        title: 'Strong',
                        value: 'strong'
                    }
                ]
            },
            // Regular styles
            styles: [
                {
                    blockEditor: {
                        render: ({ children }: { children: ReactElement }) => (
                            <div style={{ fontSize: '1.5rem', lineHeight: 1.2 }}>{children}</div>
                        )
                    },
                    title: 'Heading 1',
                    value: 'h1'
                },
                {
                    blockEditor: {
                        render: ({ children }: { children: ReactElement }) => (
                            <div style={{ fontSize: '1.25rem', lineHeight: 1.25 }}>{children}</div>
                        )
                    },
                    title: 'Heading 2',
                    value: 'h2'
                },
                {
                    blockEditor: {
                        render: ({ children }: { children: ReactElement }) => (
                            <div style={{ fontSize: '1.2rem', lineHeight: 1.25 }}>{children}</div>
                        )
                    },
                    title: 'Heading 3',
                    value: 'h3'
                },
                { title: 'Quote', value: 'blockquote' }
            ],
            // Paragraphs
            type: 'block'
        },
        {
            type: 'image'
            //   Could add alignment maybe?
        }
    ]
};
