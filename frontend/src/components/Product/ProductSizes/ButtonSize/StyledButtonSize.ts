import styled from 'styled-components';

export const StyledButtonSize = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffff;

  &:hover {
    cursor: pointer;
    border-color: rgb(17, 17, 17);
  }
`;
