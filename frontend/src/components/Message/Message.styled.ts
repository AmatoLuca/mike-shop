import styled from 'styled-components';

export const StyledMessage = styled.div`
  margin: 20px;
  padding: 30px 24px;
  background-color: rgb(245 245 245);

  .message-inner {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 30px 40px;
    background-color: #fff;
    border: 1px solid rgba(17, 17, 17, 0.38);
    border-radius: 12px;

    .message-title {
      display: flex;
      justify-content: center;
      color: rgb(17, 17, 17);
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
    }

    .message-content {
      color: rgb(112, 112, 114);
    }
  }
`;
