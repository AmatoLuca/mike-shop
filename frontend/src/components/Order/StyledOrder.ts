import styled from 'styled-components';

export const StyledOrder = styled.div`
  padding-top: 60px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 992px) {
    gap: 150px;
  }

  h1 {
    font-size: 28px;
    color: rgb(112, 112, 114);
    padding-bottom: 80px;
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
