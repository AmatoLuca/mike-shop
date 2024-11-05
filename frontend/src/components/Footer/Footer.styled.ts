import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: #f5f5f5;
  padding: 120px 40px 120px 24px;

  @media (min-width: 992px) {
    padding-top: 200px;
    padding-bottom: 200px;
  }

  .footer-inner {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    .footer-brand {
      font-size: 80px;
      font-weight: 900;
      letter-spacing: -00.33rem;
      line-height: 85%;

      @media (min-width: 576px) {
        font-size: 120px;
      }

      @media (min-width: 992px) {
        font-size: 190px;
      }
    }

    .footer-copy {
      font-size: 10px;
      font-weight: 400;
      padding-left: 6px;

      @media (min-width: 992px) {
        font-size: 12px;
      }
    }
  }
`;
