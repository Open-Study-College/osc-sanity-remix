import { gql } from 'graphql-request';
import { linkInternal, linkExternal } from './fragments/links';

export default gql`
  query settings($id: ID!) {
            Settings(id: $id) {
                menu {
                    links {
                        __typename
                        ${linkInternal}
                        ${linkExternal}
                    }
                }

                footer {
                    links {
                        __typename
                        ${linkInternal}
                        ${linkExternal}
                    }
                    textRaw
                }
            }
        }
`;
