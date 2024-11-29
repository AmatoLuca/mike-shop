import styled from 'styled-components';

export const StyledOutwear = styled.figure`
  margin-top: 120px;

  @media (min-width: 768px) {
    margin-bottom: 70px;
  }

  h3 {
    font-size: 38px;
    text-transform: uppercase;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 28px;
    font-weight: 800;
    letter-spacing: 0.09rem;

    @media (min-width: 600px) {
      padding-bottom: 36px;
    }
  }

  .outwear {
    padding-left: 24px;
    padding-right: 24px;

    .outwear__cover {
      img {
        max-width: 100%;
        object-fit: cover;
      }
    }

    figcaption {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20px;

      .outwear-title {
        font-size: 36px;
        font-weight: 800;
        letter-spacing: 0.09rem;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 16px;

        .title-slice {
          line-height: 100%;
        }
      }

      .outwear-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .outwear-description__content {
          font-size: 16px;
          width: 70%;
          text-align: center;
          font-weight: 500;
          line-height: 150%;
          padding-bottom: 26px;
        }
      }

      .outwear-action {
        display: flex;
        justify-content: center;
        width: 80px;
        color: #ffff;
        background-color: #111111;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 1px solid #111111;
        border-radius: 30px;
      }
    }
  }
`;
