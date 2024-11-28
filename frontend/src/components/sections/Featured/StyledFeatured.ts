import styled from 'styled-components';

export const StyledFeatured = styled.section`
  .featured {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 100px;
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: 600px) {
      flex-direction: row;
    }

    @media (min-width: 800px) {
      gap: 12px;
    }

    .featured__box-1 {
      position: relative;

      img {
        max-width: 100%;
        object-fit: cover;
      }

      .featured__info {
        display: flex;
        flex-direction: column;
        gap: 28px;
        position: absolute;
        bottom: 40px;
        padding-left: 24px;
        padding-right: 24px;

        .featured__title {
          font-size: 36px;
          font-weight: 700;
          color: #ffff;
          letter-spacing: 0.09rem;
          text-transform: uppercase;
        }

        .featured__action {
          display: flex;
          justify-content: center;
          width: 100px;
          color: #111111;
          background-color: #ffff;
          padding-left: 22px;
          padding-right: 22px;
          padding-top: 10px;
          padding-bottom: 10px;
          border: 1px solid #ffff;
          border-radius: 30px;
        }
      }
    }

    .featured__box-2 {
      position: relative;

      img {
        max-width: 100%;
        object-fit: cover;
      }

      .featured__info {
        display: flex;
        flex-direction: column;
        gap: 28px;
        position: absolute;
        bottom: 40px;
        padding-left: 24px;
        padding-right: 24px;

        .featured__title {
          font-size: 36px;
          font-weight: 700;
          color: #ffff;
          letter-spacing: 0.09rem;
          text-transform: uppercase;
        }

        .featured__action {
          display: flex;
          justify-content: center;
          width: 100px;
          color: #111111;
          background-color: #ffff;
          padding-left: 22px;
          padding-right: 22px;
          padding-top: 10px;
          padding-bottom: 10px;
          border: 1px solid #ffff;
          border-radius: 30px;
        }
      }
    }
  }
`;
