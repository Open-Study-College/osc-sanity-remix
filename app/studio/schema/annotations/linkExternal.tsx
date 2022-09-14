/**
 * Annotations are ways of marking up text in the block content editor.
 *
 * Read more: https://www.sanity.io/docs/customization#f924645007e1
 */
import type { ReactElement } from 'react';
import type { RuleType } from '~/studio/schemaTypes';
import { EarthGlobeIcon } from '@sanity/icons';

export default {
    title: 'External Link',
    name: 'annotationLinkExternal',
    type: 'object',
    blockEditor: {
        icon: () => <EarthGlobeIcon />,
        render: ({ children }: { children: ReactElement }) => (
            <span>
                <EarthGlobeIcon
                    style={{
                        marginLeft: '0.05em',
                        marginRight: '0.1em',
                        width: '0.75em'
                    }}
                />
                {children}
            </span>
        )
    },
    fields: [
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule: RuleType) => Rule.required().uri({ scheme: ['http', 'https'] })
        },
        // Open in a new window
        {
            title: 'Open in a new window?',
            name: 'newWindow',
            type: 'boolean',
            initialValue: true
        }
    ]
};
