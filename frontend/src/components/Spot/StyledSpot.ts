import styled from 'styled-components';

export const StyledSpot = styled.div`
  height: 92vh;
  width: 100%;
  margin-bottom: 100px;

  @media (min-width: 576px) {
    height: 40vh;
  }

  @media (min-width: 992px) {
    height: 50vh;
    margin-bottom: 130px;
  }

  @media (min-width: 1200px) {
    height: 70vh;
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
