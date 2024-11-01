import styled from 'styled-components';

export const StyledSearchItem = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 100%;
  background-color: inherit;

  svg {
    font-size: 24px;
    margin: 8px;
  }

  &:hover {
    cursor: pointer;
    background-color: #e5e5e5;
  }
`;
