import styled from 'styled-components';

export const StyledAccount = styled.div`
  h1 {
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 0.03rem;
    padding-bottom: 36px;
  }

  .form-row {
    input {
      width: 100%;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 12px;
      padding-right: 12px;
      margin-bottom: 32px;
      border-radius: 8px;
      border: 1px solid rgb(17, 17, 17);
      color: rgb(117, 117, 117);
      font-size: 16px;
    }
  }

  .login-btn-row {
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    padding-bottom: 20px;

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
`;
