import styled from 'styled-components';

export const StyledNavigator = styled.nav`
  display: flex;
  justify-content: space-between;

  .nav__menu {
    display: flex;
    justify-content: space-evenly;

    .nav__menu__item {
      @media (min-width: 576px) {
        padding-left: 6px;
        padding-right: 6px;
      }
    }
  }
`;
