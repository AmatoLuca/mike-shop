import styled from 'styled-components';

export const StyledCartSummary = styled.div`
  font-size: 15.5px;
  padding-top: 22px;
  margin-left: 16px;
  margin-right: 16px;

  .cart-summary {
    .cart-summary-title {
      font-size: 26px;
      letter-spacing: 0.03rem;
      padding-bottom: 24px;
    }

    .cart-summary-subtotal {
      display: flex;
      justify-content: space-between;
      padding-bottom: 12px;

      @media (min-width: 900px) {
        padding-bottom: 20px;
      }

      .cart-summary-subtotal-key {
        color: rgb(73 73 73);
      }

      .cart-summary-subtotal-value {
        font-size: 16.5px;
        font-weight: 300;
      }
    }

    .cart-summary-shipping {
      display: flex;
      justify-content: space-between;
      padding-bottom: 12px;

      @media (min-width: 900px) {
        padding-bottom: 20px;
      }

      .cart-summary-shipping-key {
        color: rgb(73 73 73);
      }

      .cart-summary-shipping-value {
        font-weight: 300;
      }
    }

    .cart-summary-tax {
      display: flex;
      justify-content: space-between;
      padding-bottom: 12px;

      @media (min-width: 900px) {
        border-bottom: 1px solid #cfcfcf;
        padding-bottom: 24px;
      }

      .cart-summary-tax-key {
        color: rgb(73 73 73);
      }

      .cart-summary-tax-value {
        font-weight: 300;
      }
    }

    .cart-summary-total {
      display: flex;
      justify-content: space-between;
      padding-top: 18px;
      padding-bottom: 12px;

      @media (min-width: 900px) {
        border-bottom: 1px solid #cfcfcf;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .cart-summary-total-key {
        color: rgb(73 73 73);
      }

      .cart-summary-total-value {
        font-weight: 500;
      }
    }
  }
`;
