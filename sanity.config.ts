import { createConfig, isDev } from 'sanity';
import { LOCKED_DOCUMENT_IDS, SANITY_API_VERSION } from '~/lib/sanity/constants';
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

// @ts-ignore
export default createConfig({
    name: 'default',
    title: 'Shopify - openstudydev',
    basePath: '/studio',
    projectId: 'v6lebos6',
    dataset: 'production',

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
        }

        // prev is the result from previous plugins and can be composed
        // productionUrl: async (prev, context) => {
        //   // context includes the client an other details
        //   const { document } = context;

        //   const siteUrl = isDev
        //     ? "http://localhost:3000"
        //     : "https://osc-sanity-remix.fly.dev/";

        //   const params = new URLSearchParams();
        //   params.set("preview", "true");

        //   switch (document._type) {
        //     case "page":
        //       return `${siteUrl}/pages/${document.slug.currenct}?${params}`;

        //     case "collection":
        //       return `${siteUrl}/collections/${document.store.slug.currenct}?${params}`;

        //     case "product":
        //       return `${siteUrl}/products/${document.store.slug.currenct}?${params}`;

        //     default:
        //       return `${siteUrl}/?${params}`;
        //   }
        // },
    },

    schema: {
        types: schemaTypes
    }
});
