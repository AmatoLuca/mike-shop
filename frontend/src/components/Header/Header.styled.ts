import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: grid;
  background-color: #ffffff;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  grid-template-columns: repeat(3, 1fr);

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

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
