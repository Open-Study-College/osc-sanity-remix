import { DocumentsIcon } from '@sanity/icons';

export const pages = (S) =>
    S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .schemaType('page')
        .child(S.documentTypeList('page'));
