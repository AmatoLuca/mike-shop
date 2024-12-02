import styled from 'styled-components';

export const StyledCartContentWrapper = styled.div`
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  }

  & > :first-child {
    @media (min-width: 900px) {
      flex-basis: 65vw;
    }
  }

  & > :last-child {
    @media (min-width: 900px) {
      flex-basis: 35vw;
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;
