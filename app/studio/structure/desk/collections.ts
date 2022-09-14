import type { StructureBuilder } from 'sanity/desk';

export const collections = (S: StructureBuilder) =>
    S.listItem()
        .title('Collections')
        .schemaType('collection')
        .child(S.documentTypeList('collection'));
