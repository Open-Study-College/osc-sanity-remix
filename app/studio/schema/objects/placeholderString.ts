import PlaceholderStringInput from '~/studio/components/inputs/PlaceholderString';

import { defineType } from 'sanity';

export const placeholderString = defineType({
    name: 'placeholderString',
    title: 'Title',
    type: 'string',
    components: {
        input: PlaceholderStringInput
    }
});
