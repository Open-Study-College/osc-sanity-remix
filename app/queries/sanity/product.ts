import groq from 'groq';
import { HERO } from './fragments/hero';
import { MODULES } from './fragments/modules';
import { SEO } from './fragments/seo';

export const PRODUCT_QUERY = groq`
    *[ _type == "product" && store.slug.current == $slug ] {
        _id,
        _rev,
        _type,
        title,
        store,
        ${HERO},
        ${MODULES},
        ${SEO}
    }
`;
