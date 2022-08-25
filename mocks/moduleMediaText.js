export default {
    _type: 'module.mediaText',
    _key: '4124f0ca0252',
    layout: 'media-left',
    bodyRaw: [
        {
            _key: '34f179a72d2d',
            _type: 'block',
            children: [
                {
                    _key: '7bb03b167e16',
                    _type: 'span',
                    marks: [],
                    text: 'Media / Text'
                }
            ],
            markDefs: [],
            style: 'h2'
        },
        {
            _key: 'f7b14de48902',
            _type: 'block',
            children: [
                {
                    _key: '0244e4c661b3',
                    _type: 'span',
                    marks: [],
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo '
                },
                {
                    _key: '5e01a781abd0',
                    _type: 'span',
                    marks: ['5a6c3d317d34'],
                    text: 'consequat'
                },
                {
                    _key: '9bfaa0b91be0',
                    _type: 'span',
                    marks: [],
                    text: '.'
                }
            ],
            markDefs: [
                {
                    _key: '5a6c3d317d34',
                    _type: 'annotationLinkInternal',
                    reference: {
                        _ref: '0fd68162-1deb-4ddd-9e9b-f452f5ac9ea4',
                        _type: 'reference',
                        _weak: true
                    },
                    Page: {
                        slug: {
                            current: 'empty-page'
                        }
                    }
                }
            ],
            style: 'normal'
        }
    ],
    links: [
        {
            __typename: 'LinkInternal',
            _key: '5d51ae3a208b',
            title: 'Internal Link',
            reference: {
                __typename: 'Page',
                _key: null,
                title: 'Empty Page',
                slug: {
                    current: 'empty-page'
                }
            }
        },
        {
            __typename: 'LinkExternal',
            _key: 'f6e1a9e61af1',
            title: 'External Link',
            url: 'https://openstudycollege.com/',
            newWindow: true
        }
    ],
    media: {
        asset: {
            url: 'https://cdn.sanity.io/images/v6lebos6/production/4be19b22e40777eb74560c25af30ea948bf3ed09-1920x1280.jpg',
            altText: null
        }
    }
};
