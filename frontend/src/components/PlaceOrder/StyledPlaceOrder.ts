import styled from 'styled-components';

export const StyledPlaceOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .place-order-col-1 {
    display: flex;
    flex-direction: column;
    gap: 50px;
    paddin-top: 40px;
    padding-bottom: 40px;

    @media (min-width: 768px) {
      width: 50%;
    }
  }

  .place-order-col-2 {
    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;
