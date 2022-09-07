import type { StructureResolver } from 'sanity/desk';
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
