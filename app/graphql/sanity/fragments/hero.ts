import { linkInternal, linkExternal } from './links';

export const hero = `showHero
hero {
    image {
        asset {
          url
          altText
        }
      }
    bodyRaw
    links {
        __typename
        ${linkInternal}
        ${linkExternal}
    }
}`;
