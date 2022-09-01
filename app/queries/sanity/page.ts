import groq from 'groq';
import { HERO } from './fragments/hero';
import { MODULES } from './fragments/modules';
import { SEO } from './fragments/seo';

export const PAGE_QUERY = groq`
    *[ _type == "page" && slug.current == $slug ] {
        _id,
        _rev,
        _type,
        title,
        ${HERO},
        ${MODULES},
        ${SEO}
    }
`;
