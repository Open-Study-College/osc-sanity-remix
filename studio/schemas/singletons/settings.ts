import { CogIcon, PackageIcon } from '@sanity/icons';

const TITLE = 'Settings';

export default {
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
        {
            name: 'menu',
            title: 'Menu',
            type: 'settings.menu',
            group: 'navigation',
            options: {
                collapsed: false,
                collapsible: true
            }
        },
        // Footer
        {
            name: 'footer',
            title: 'Footer',
            type: 'settings.footer',
            group: 'navigation',
            options: {
                collapsed: false,
                collapsible: true
            }
        },
        // Custom product options
        // {
        //   name: "customProductOptions",
        //   title: "Custom product options",
        //   type: "array",
        //   group: "productOptions",
        //   of: [
        //     {
        //       name: "customProductOption.color",
        //       type: "customProductOption.color",
        //     },
        //     {
        //       name: "customProductOption.size",
        //       type: "customProductOption.size",
        //     },
        //   ],
        //   validation: (Rule) =>
        //     Rule.custom((options) => {
        //       // Each product option type must have a unique title
        //       if (options) {
        //         const uniqueTitles = new Set(options.map((option) => option.title));
        //         if (options.length > uniqueTitles.size) {
        //           return "Each product option type must have a unique title";
        //         }
        //       }
        //       return true;
        //     }),
        // },
        // Not found page
        {
            name: 'notFoundPage',
            title: '404 page',
            type: 'settings.notFoundPage',
            group: 'notFoundPage'
        },
        // SEO
        {
            name: 'seo',
            title: 'SEO',
            type: 'settings.seo',
            group: 'seo'
        }
    ],
    preview: {
        prepare() {
            return {
                title: TITLE
            };
        }
    }
};
