export default function resolveProductionUrl(document) {
    const siteUrl = 'http://localhost:3000';
    let path;

    switch (document._type) {
        case 'page':
            path = `/pages/${document.slug.current}`;
            break;
        case 'collection':
            path = `/collections/${document.store.slug.current}`;
            break;
        case 'product':
            path = `/products/${document.store.slug.current}`;
            break;
    }

    const previewUrl = `${siteUrl}${path}?preview=${document._rev}`;

    return previewUrl;
}
