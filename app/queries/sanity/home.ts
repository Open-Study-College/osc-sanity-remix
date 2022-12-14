import groq from 'groq';
import { HERO } from './fragments/hero';
import { MODULES } from './fragments/modules';
import { SEO } from './fragments/seo';

export const HOME_QUERY = groq`
    *[ _type == "home" ] {
        _id,
        _rev,
        _type,
        title,
        ${HERO},
        ${MODULES},
        ${SEO}
    }
`;
