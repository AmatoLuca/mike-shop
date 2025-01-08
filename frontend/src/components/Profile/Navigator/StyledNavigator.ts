import styled from 'styled-components';

export const StyledNavigator = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 70px;
  gap: 22px;

  @media (min-width: 500px) {
    justify-content: center;
    gap: 20px;
  }

  a {
    font-size: 14px;
    font-weight: 600;
    color: rgb(58 58 58);

    &:hover {
      color: rgb(216 216 216);
    }
  }
`;
