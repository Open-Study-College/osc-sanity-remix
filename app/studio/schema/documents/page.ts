import { defineField, defineType } from 'sanity';
import { DocumentIcon } from '@sanity/icons';
import { validateSlug } from '~/studio/utils/validateSlug';

export const page = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: DocumentIcon,
    groups: [
        {
            name: 'theme',
            title: 'Theme'
        },
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
        // Title
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        // Slug
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            // @ts-ignore -- expect rule to come from function
            validation: validateSlug
        }),
        // Show hero
        defineField({
            name: 'showHero',
            title: 'Show hero',
            type: 'boolean',
            description: 'If disabled, page title will be displayed instead',
            initialValue: false,
            group: 'editorial'
        }),
        // Hero
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
            of: [{ type: 'module.mediaText' }, { type: 'module.content' }],
            group: 'editorial'
        }),
        // SEO
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo.page',
            group: 'seo'
        })
    ],
    preview: {
        select: {
            active: 'active',
            seoImage: 'seo.image',
            title: 'title'
        },
        prepare(selection: Record<string, any>) {
            const { seoImage, title } = selection;
            return {
                media: seoImage,
                title
            };
        }
    }
});
