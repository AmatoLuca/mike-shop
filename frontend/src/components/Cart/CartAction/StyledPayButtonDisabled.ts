import styled from 'styled-components';

export const StyledPayButtonDisabled = styled.div`
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
  border: 1.5px solid rgb(245, 245, 245);
  background-color: rgb(245, 245, 245);
  letter-spacing: 0.06rem;
  color: rgb(117, 117, 117);
  width: 100%;

  &:hover {
    cursor: default;
  }
`;
