import styled from 'styled-components';

export const StyledItemContent = styled.div`
  display: flex;
  gap: 20px;
  font-size: 15px;

  .profile-orders-thumbnail {
    min-width: 120px;
    height: 120px;

    @media (min-width: 576px) {
      width: 154px;
      height: 154px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .profile-orders-info {
    .profile-orders-info-regular {
      padding-bottom: 8px;
      color: rgb(112, 112, 114);
    }

    .profile-orders-info-main {
      padding-top: 8px;
      padding-bottom: 16px;
      font-weight: 600;
    }

    .profile-orders-info-details-btn {
      padding-top: 12px;

      button {
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

        &:hover {
          cursor: pointer;
          background-color: #707072;
          border-color: #707072;
        }
      }
    }
  }
`;
