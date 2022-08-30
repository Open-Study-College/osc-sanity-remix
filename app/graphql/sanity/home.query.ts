import { gql } from 'graphql-request';
import { hero } from './fragments/hero';
import { modules } from './fragments/modules';
import { seo } from './fragments/seo';

export default gql`
  query GetHome {
    allHome {
      _id
      _rev
      ${hero}
      ${modules}
      ${seo}
    }
  }
`;
