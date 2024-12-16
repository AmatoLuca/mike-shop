import styled from 'styled-components';

export const StyledPaymentType = styled.div`
  border: 1px solid rgb(148 148 148);
  padding: 16px;

  .payment-type-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .payment-type-info {
      letter-spacing: 0.02rem;
    }
  }
`;
