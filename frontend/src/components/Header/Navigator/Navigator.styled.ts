import styled from 'styled-components';

export const StyledNavigator = styled.nav`
  display: flex;

  .nav__main-menu {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }

  .nav__secondary-menu {
    display: flex;
    @media (min-width: 992px) {
      justify-content: flex-end;
      padding-left: 32px;
    }
  }

  .nav__main__menu__icons {
    display: flex;
  }

  svg {
    font-size: 24px;
    margin: 8px;
  }
`;
