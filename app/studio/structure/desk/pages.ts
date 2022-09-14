import type { StructureBuilder } from 'sanity/desk';
import { DocumentsIcon } from '@sanity/icons';

export const pages = (S: StructureBuilder) =>
    S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .schemaType('page')
        .child(S.documentTypeList('page'));
