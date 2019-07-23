import styled from '@emotion/styled';
import { media } from '../tokens';

export default styled('div')`
  margin-top: 4rem;

  @media ${media.large} {
    @supports (display: grid) {
      grid-column: 2 / span 2;
      grid-row-start: 2;
      margin-top: 0;
    }
  }
`;
