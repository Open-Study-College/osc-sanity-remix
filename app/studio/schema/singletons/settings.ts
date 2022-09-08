import { CogIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const TITLE = 'Settings';

export const settings = defineType({
    name: 'settings',
    title: TITLE,
    type: 'document',
    icon: CogIcon,
    groups: [
        {
            default: true,
            name: 'navigation',
            title: 'Navigation'
        },
        {
            name: 'productOptions',
            title: 'Product options'
        },
        {
            name: 'notFoundPage',
            title: '404 page'
        },
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        // Menu
        defineField({
            name: 'menu',
            title: 'Menu',
            type: 'settings.menu',
            group: 'navigation',
            options: {
                collapsed: false,
                collapsible: true
            }
        }),
        // Footer
        defineField({
            name: 'footer',
            title: 'Footer',
            type: 'settings.footer',
            group: 'navigation',
            options: {
                collapsed: false,
                collapsible: true
            }
        }),
        // Not found page
        defineField({
            name: 'notFoundPage',
            title: '404 page',
            type: 'settings.notFoundPage',
            group: 'notFoundPage'
        }),
        // SEO
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'settings.seo',
            group: 'seo'
        })
    ],
    preview: {
        prepare() {
            return {
                title: TITLE
            };
        }
    }
});
