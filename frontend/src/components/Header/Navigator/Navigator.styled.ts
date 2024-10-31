import styled from 'styled-components';

export const StyledNavigator = styled.nav`
  display: grid;
  grid-template-columns: 2fr auto auto;
  grid-template-rows: repeat(2, auto);

  .grid-area-1,
  .grid-area-2,
  .grid-area-3,
  .grid-area-4,
  .grid-area-5,
  .grid-area-6 {
    display: flex;
    align-items: center;
  }

  .grid-area-2,
  .grid-area-3 {
    justify-content: flex-end;
  }

  svg {
    font-size: 24px;
    margin: 8px;
  }
`;
