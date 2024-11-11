import styled from 'styled-components';

export const StyledRating = styled.div`
  // da rimuovere
  margin-top: 32px;
  margin-left: 20px;
  margin-right: 20px;

  border-top: 1px solid rgba(17, 17, 17, 0.2);
  border-bottom: 1px solid rgba(17, 17, 17, 0.2);

  .rating-summary {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 30px;

    &:hover {
      cursor: pointer;
    }

    .rating-summary__stars-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .rating-summary__stars-icon {
        margin-top: 5px;
        margin-left: 12px;
      }
    }
  }
`;
