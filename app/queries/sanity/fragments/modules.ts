import groq from 'groq';
import { MODULE_CONTENT } from './modules/content';
import { MODULE_MEDIA_TEXT } from './modules/mediaText';

export const MODULES = groq`
modules[] {
    _type,
    (_type == "module.content") => {
        ${MODULE_CONTENT}
    },
    (_type == "module.mediaText") => {
        ${MODULE_MEDIA_TEXT}
    },
}
`;
