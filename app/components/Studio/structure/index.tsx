import type { StructureResolver, DefaultDocumentNodeResolver } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
import { resolvePreviewUrl } from '~/lib/sanity/actions/resolvePreviewUrl';
import { home } from './desk/home';
import { pages } from './desk/pages';
import { collections } from './desk/collections';
import { products } from './desk/products';
import { settings } from './desk/settings';

// If you add document types to desk structure manually, you can add them to this array to prevent duplicates in the root pane
const DOCUMENT_TYPES_IN_STRUCTURE = [
    'collection',
    'home',
    'media.tag',
    'page',
    'product',
    'productVariant',
    'settings'
];

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
    if (['home', 'page', 'collection', 'product'].includes(schemaType)) {
        return S.document().views([
            S.view.form(),
            S.view
                .component(Iframe)
                .options({
                    url: (doc) => resolvePreviewUrl(doc),
                    reload: { button: true }
                })
                .title('Preview')
        ]);
    }

    return S.document();
};

// note: context includes `currentUser` and the client
export const structure: StructureResolver = (S, context) => {
    return S.list()
        .title('Content')
        .items([
            home(S),
            pages(S),
            S.divider(),
            collections(S),
            products(S),
            S.divider(),
            settings(S),
            S.divider(),
            // Automatically add new document types to the root pane
            ...S.documentTypeListItems().filter(
                (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId())
            )
        ]);
};
