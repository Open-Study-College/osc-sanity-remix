export const settings = (S) =>
    S.listItem()
        .title('Settings')
        .schemaType('settings')
        .child(S.editor().title('Settings').schemaType('settings').documentId('settings'));
