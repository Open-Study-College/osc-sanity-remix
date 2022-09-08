export const collections = (S) =>
    S.listItem()
        .title('Collections')
        .schemaType('collection')
        .child(S.documentTypeList('collection'));
