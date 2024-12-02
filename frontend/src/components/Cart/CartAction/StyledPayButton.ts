import styled from 'styled-components';

export const StyledPayButton = styled.button`
  font-size: 16px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  padding-right: 18px;
  border-radius: 30px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 1.5px solid black;
  background-color: rgb(17, 17, 17);
  letter-spacing: 0.06rem;
  color: #ffff;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;
