import groq from 'groq';
import { IMAGE } from '../image';
import { LINK_EXTERNAL } from '../linkExternal';
import { LINK_INTERNAL } from '../linkInternal';
import { PORTABLE_TEXT } from '../portableText';

export const MODULE_MEDIA_TEXT = groq`
    ...,
    body[] {
        ${PORTABLE_TEXT}
    },
    media {
        ${IMAGE}
    },
    links[] {
        _key,
        _type,
        title,
        (_type == 'linkInternal') => {
            ${LINK_INTERNAL}
        },
        (_type == 'linkExternal') => {
            ${LINK_EXTERNAL}
        },
    },
`;
