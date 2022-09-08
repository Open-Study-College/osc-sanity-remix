import { HomeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const TITLE = 'Home';

export const home = defineType({
    name: 'home',
    title: TITLE,
    type: 'document',
    icon: HomeIcon,
    groups: [
        {
            default: true,
            name: 'editorial',
            title: 'Editorial'
        },
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        // Hero
        defineField({
            name: 'showHero',
            title: 'Show hero',
            type: 'boolean',
            description: 'If disabled, page title will be displayed instead',
            initialValue: false,
            group: 'editorial'
        }),
        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'hero',
            hidden: ({ document }) => !document?.showHero,
            group: 'editorial'
        }),
        // Modules
        defineField({
            name: 'modules',
            title: 'Modules',
            type: 'array',
            of: [{ type: 'module.content' }, { type: 'module.mediaText' }],
            group: 'editorial'
        }),
        // SEO
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo.home',
            group: 'seo'
        })
    ],
    preview: {
        prepare() {
            return {
                // media: icon,
                subtitle: 'Index',
                title: TITLE
            };
        }
    }
});
