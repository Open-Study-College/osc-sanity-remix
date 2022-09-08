import { createConfig, isDev } from 'sanity';
import {
    SANITY_STUDIO_API_DATASET,
    SANITY_STUDIO_API_PROJECT_ID,
    LOCKED_DOCUMENT_IDS,
    SANITY_API_VERSION
} from '~/studio/constants';
// Plugins
import { deskTool } from 'sanity/desk';
import {
    dashboardTool,
    sanityTutorialsWidget,
    projectUsersWidget,
    projectInfoWidget
} from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
// Components
import { structure, defaultDocumentNode } from '~/studio/structure';
import { schemaTypes } from '~/studio/schema';
// Actions
import { deleteAction } from '~/studio/actions/deleteAction';
import { duplicateAction } from '~/studio/actions/duplicateAction';
import shopifyLink from '~/studio/actions/shopifyLink';

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
            structure,
            defaultDocumentNode
        }),
        media(),
        isDev
            ? visionTool({
                  defaultApiVersion: SANITY_API_VERSION
              })
            : []
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
        }
    },

    schema: {
        types: schemaTypes
    }
});
