import groq from 'groq';
import { HERO } from './fragments/hero';
import { MODULES } from './fragments/modules';
import { SEO } from './fragments/seo';

export const COLLECTION_QUERY = groq`
    *[ _type == "collection" && store.slug.current == $slug ] {
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
