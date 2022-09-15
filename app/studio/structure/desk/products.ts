import type { StructureBuilder } from 'sanity/desk';
import { InfoOutlineIcon } from '@sanity/icons';
import Iframe from 'sanity-plugin-iframe-pane';
import { resolvePreviewUrl } from '~/studio/actions/resolvePreviewUrl';

export const products = (S: StructureBuilder) =>
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
                            .child(
                                S.document()
                                    .schemaType('product')
                                    .documentId(id)
                                    .views([
                                        S.view.form(),
                                        S.view
                                            .component(Iframe)
                                            .options({
                                                // @ts-ignore
                                                url: (doc: Document) => resolvePreviewUrl(doc),
                                                reload: { button: true }
                                            })
                                            .title('Preview')
                                    ])
                            ),
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
