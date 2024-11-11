import styled from 'styled-components';

export const StyledProductScreen = styled.div`
  padding-top: 24px;

  .product-header {
    padding-left: 24px;
    padding-right: 24px;
    //margin-bottom: 24px;

    .product-name {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 500;
      padding-bottom: 8px;
    }

    .product-category {
      font-size: 16px;
      color: rgb(112, 112, 112);
      font-weight: 400;
      padding-bottom: 16px;
    }

    .product-price {
      font-size: 16px;
      font-weight: 500;
      padding-bottom: 24px;
    }
  }

  .product-btn-wrapper {
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .product-description {
    padding-top: 28px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 28px;
    font-size: 15px;
    line-height: 24px;
  }
`;
