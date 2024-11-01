import styled from 'styled-components';

export const StyledNavigator = styled.nav`
  display: flex;
  justify-content: space-between;

  .nav__menu {
    display: flex;
    justify-content: space-evenly;

    .nav__menu__item {
      padding-left: 6px;
      padding-right: 6px;
    }
  }

  svg {
    font-size: 24px;
    margin: 8px;
  }
`;
