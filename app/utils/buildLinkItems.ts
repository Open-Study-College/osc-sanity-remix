export default function buildLinkItems(data) {
    const { links } = data;

    const linkItems = links.map((link) => {
        switch (link.__typename) {
            case 'LinkInternal':
                let url;

                if (link.reference.__typename === 'Page') {
                    url = `/pages/${link.reference.slug.current}`;
                }

                if (link.reference.__typename === 'Collection') {
                    url = `/collections/${link.reference.store.slug.current}`;
                }

                if (link.reference.__typename === 'Product') {
                    url = `/products/${link.reference.store.slug.current}`;
                }

                return {
                    __typename: link.__typename,
                    _key: link._key,
                    title: link.title,
                    url
                };

            case 'LinkExternal':
                return {
                    __typename: link.__typename,
                    _key: link._key,
                    title: link.title,
                    url: link.url,
                    newWindow: link.newWindow
                };

            default:
                break;
        }
    });

    return linkItems;
}
