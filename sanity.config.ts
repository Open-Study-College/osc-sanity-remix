import { createConfig, isDev } from 'sanity';
import {
    SANITY_STUDIO_API_DATASET,
    SANITY_STUDIO_API_PROJECT_ID,
    LOCKED_DOCUMENT_IDS,
    SANITY_API_VERSION
} from '~/lib/sanity/constants';
// Plugins
import { deskTool } from 'sanity/desk';
import {
    dashboardTool,
    sanityTutorialsWidget,
    projectUsersWidget,
    projectInfoWidget
} from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
// import { media, mediaAssetSource } from "sanity-plugin-media";
//! @mdx-js dependency is @theme-ui and cases an ESM error -- possible blocker?
// Components
import { structure } from '~/components/Studio/structure';
import { schemaTypes } from '~/components/Studio/schema';
// Actions
import { deleteAction } from '~/lib/sanity/actions/deleteAction';
import { duplicateAction } from '~/lib/sanity/actions/duplicateAction';
import shopifyLink from '~/lib/sanity/actions/shopifyLink';
import { resolvePreviewUrl } from '~/lib/sanity/actions/resolvePreviewUrl';

// @ts-ignore
export default createConfig({
    name: 'default',
    title: 'Shopify - openstudydev',
    basePath: '/studio',
    projectId: SANITY_STUDIO_API_PROJECT_ID,
    dataset: SANITY_STUDIO_API_DATASET,

    plugins: [
        dashboardTool({
            widgets: [sanityTutorialsWidget(), projectInfoWidget(), projectUsersWidget()]
        }),
        deskTool({
            structure
        }),
        isDev
            ? visionTool({
                  defaultApiVersion: SANITY_API_VERSION
              })
            : []
        // media(),
    ],

    document: {
        newDocumentOptions: (prev) => {
            // Hide locked documents from 'create new document' menu
            const filteredItems = prev.filter((previousItem) => {
                const locked = LOCKED_DOCUMENT_IDS.find((id) => id === previousItem.templateId);

                return previousItem.templateId !== locked;
            });

            return filteredItems;
        },

        actions: (prev) => {
            const resolveActions = prev.map((previousAction) => {
                switch (previousAction.action) {
                    case 'delete':
                        return deleteAction;

                    case 'duplicate':
                        return duplicateAction;

                    default:
                        return previousAction;
                }
            });

            return [...resolveActions, shopifyLink];
        },

        // prev is the result from previous plugins and can be composed
        productionUrl: async (prev, context) => {
            // context includes the client an other details
            const previewUrl = resolvePreviewUrl(prev, context);

            return previewUrl;
        }
    },

    schema: {
        types: schemaTypes
    }
});
