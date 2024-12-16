import styled from 'styled-components';

export const StyledPaymentInput = styled.div<{ $isActive?: boolean }>`
  .input-method {
    border: 1px solid rgb(83 82 82);
    border-width: ${(props) => (props.$isActive ? '6px' : '1px')};
    border-radius: 100%;
    width: 24px;
    height: 24px;

    &:hover {
      cursor: pointer;
    }
  }
`;
