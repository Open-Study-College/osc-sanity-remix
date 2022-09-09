import type { StructureBuilder } from 'sanity/desk';

export const home = (S: StructureBuilder) =>
    S.listItem()
        .title('Home')
        .schemaType('home')
        .child(S.editor().title('Home').schemaType('home').documentId('home'))
        .child(S.documentTypeList('home'));
