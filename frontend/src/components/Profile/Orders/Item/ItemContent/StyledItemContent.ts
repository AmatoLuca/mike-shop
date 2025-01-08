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
  }
`;
