import { linkInternal, linkExternal } from './links';

export const modules = `
    modules {
			... on ModuleContent {
         _type
        _key
        bodyRaw
      }
      ... on ModuleMediaText {
				_type
        _key
        layout
        bodyRaw
        links {
        __typename
            ${linkInternal}
            ${linkExternal}
        }
        media {
          asset {
            url
            altText
          }
        }
      }
    }
`;
