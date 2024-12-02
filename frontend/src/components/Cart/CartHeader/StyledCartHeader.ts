import styled from 'styled-components';

export const StyledCartHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-left: 16px;
  margin-right: 16px;
  border-bottom: 1px solid #cfcfcf;

  .cart-header-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .cart-header-content__title {
      font-size: 24px;
      font-weight: 500;
      padding-bottom: 8px;
    }

    .cart-header-content__info {
      display: flex;
      gap: 10px;

      .cart-header-content__quantity {
        color: #707072;
      }

      .cart-header-content__total-price {
        font-weight: 400;
        letter-spacing: 0.03rem;
      }
    }
  }
`;
