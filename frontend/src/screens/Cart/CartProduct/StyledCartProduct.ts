import styled from 'styled-components';

export const StyledCartProduct = styled.div`
  padding-top: 36px;
  padding-bottom: 36px;
  margin-left: 16px;
  margin-right: 16px;
  border-bottom: 1px solid #cfcfcf;

  .cart-product {
    display: flex;
    gap: 12px;

    .cart-product-image {
      width: 154px;
      height: 154px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .cart-product-details {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-top: 4px;
      flex-grow: 1;

      .cart-product-info {
        @media (min-width: 600px) {
          display: flex;
          justify-content: space-between;
        }

        .cart-product-price {
          font-weight: 500;
          padding-bottom: 8px;

          @media (min-width: 600px) {
            padding-bottom: 0px;
            order: 2;
          }
        }

        .cart-product-name {
          font-weight: 500;

          @media (min-width: 600px) {
            order: 1;
          }
        }
      }

      .cart-product-type {
        color: rgb(112, 112, 114);
        font-weight: 300;
      }

      .cart-product-size {
        color: rgb(112, 112, 114);
        font-weight: 300;
      }
    }
  }
`;
