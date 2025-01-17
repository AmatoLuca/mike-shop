import styled from 'styled-components';

export const StyledCreateReview = styled.div`
  padding-bottom: 30px;

  .review-create {
    width: 100px;
    border-bottom: 1px solid rgb(17, 17, 17);

    &:hover {
      cursor: pointer;
    }

    .review-create_action-title {
      font-size: 14px;
      letter-spacing: 0.02rem;
    }
  }

  .review-create-form {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;

    select {
      margin-top: 20px;
      margin-bottom: 20px;
      padding-left: 8px;
      padding-top: 8px;
      padding-right: 8px;
      padding-bottom: 8px;
      border-radius: 5px;
    }

    textarea {
      padding-left: 12px;
      padding-top: 12px;
      padding-right: 12px;
      padding-bottom: 12px;
      border-radius: 5px;
      min-height: 100px;
    }

    button.review-create-submit {
      font-size: 12px;
      background-color: #111111;
      border: 1px solid #111111;
      color: #ffff;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 12px;
      padding-right: 12px;
      border-radius: 30px;
      letter-spacing: 0.03rem;
      margin-top: 20px;
      width: 70px;

      &:hover {
        cursor: pointer;
        background-color: #707072;
        border-color: #707072;
      }
    }
  }
`;
