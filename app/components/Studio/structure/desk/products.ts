import { InfoOutlineIcon } from '@sanity/icons';

export const products = (S) =>
    S.listItem()
        .title('Products')
        .schemaType('product')
        .child(
            S.documentTypeList('product').child(async (id) =>
                S.list()
                    .title('Product')
                    .items([
                        // Details
                        S.listItem()
                            .title('Details')
                            .icon(InfoOutlineIcon)
                            .child(S.document().schemaType('product').documentId(id)),
                        // Product variants
                        S.listItem()
                            .title('Variants')
                            .schemaType('productVariant')
                            .child(
                                S.documentList()
                                    .title('Variants')
                                    .schemaType('productVariant')
                                    .filter(
                                        `
                      _type == "productVariant"
                      && store.productId == $productId
                    `
                                    )
                                    .params({
                                        productId: Number(id.replace('shopifyProduct-', ''))
                                    })
                            )
                    ])
            )
        );
