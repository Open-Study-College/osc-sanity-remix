import { CogIcon, PackageIcon } from '@sanity/icons';

export default {
    name: 'settings.menu',
    title: 'Menu',
    type: 'object',
    fields: [
        // Links
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{ type: 'collectionGroup' }, { type: 'linkInternal' }, { type: 'linkExternal' }]
        }
    ]
};
