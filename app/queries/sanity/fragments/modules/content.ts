import groq from 'groq';
import { PORTABLE_TEXT } from '../portableText';

export const MODULE_CONTENT = groq`
    ...,
    body[] {
        ${PORTABLE_TEXT}
    },
`;
