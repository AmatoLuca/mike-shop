import styled from 'styled-components';

export const StyledPayment = styled.div`
  h1 {
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 0.03rem;
    padding-bottom: 36px;
  }

  form {
    .login-btn-row {
      display: flex;
      justify-content: flex-end;
      padding-top: 20px;
      padding-bottom: 20px;

      .diabled-btn {
        font-size: 14px;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 24px;
        padding-right: 24px;
        border-radius: 30px;
        letter-spacing: 0.03rem;

        border: 1.5px solid rgb(245, 245, 245);
        background-color: rgb(245, 245, 245);
        color: rgb(117, 117, 117);
      }

      button {
        background-color: #111111;
        border: 1px solid #111111;
        color: #ffff;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 24px;
        padding-right: 24px;
        border-radius: 30px;
        letter-spacing: 0.03rem;

        &:hover {
          cursor: pointer;
          background-color: #707072;
          border-color: #707072;
        }
      }
    }
  }
`;
