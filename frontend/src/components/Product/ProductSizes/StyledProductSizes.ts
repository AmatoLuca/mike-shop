import styled from 'styled-components';

export const StyledProductSizes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  grid-template-rows: auto;
  gap: 7px;
  padding: 24px;
`;
