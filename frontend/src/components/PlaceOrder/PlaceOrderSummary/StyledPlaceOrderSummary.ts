import styled from 'styled-components';

export const StyledPlaceOrderSummary = styled.div`
  background-color: #f5f5f5;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 24px;

  .order-summary-inner {
    .order-summary-row {
      display: flex;
      gap: 200px;
      padding: 16px;

      border-bottom: 1px solid #cfcfcf;

      .order-summary-key {
        width: 100px;
        color: rgb(112, 112, 114);
      }

      .order-summary-value {
        display: flex;
        justify-content: flex-start;
        width: 100px;
      }
    }

    .order-summary-row-btn {
      display: flex;
      justify-content: flex-end;
      padding-top: 40px;
      padding-bottom: 20px;

      button {
        background-color: #111111;
        border: 1px solid #111111;
        color: #ffff;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 24px;
        padding-right: 24px;
        border-radius: 30px;
        letter-spacing: 0.03rem;

        &:hover {
          cursor: pointer;
          background-color: #707072;
          border-color: #707072;
        }
      }
    }
  }
`;
