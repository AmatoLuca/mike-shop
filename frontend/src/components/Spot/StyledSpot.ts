import styled from 'styled-components';

export const StyledSpot = styled.div`
  height: 92vh;
  width: 100%;
  margin-bottom: 130px;

  @media (min-width: 576px) {
    height: 25vh;
  }

  @media (min-width: 768px) {
    height: 30vh;
  }

  @media (min-width: 992px) {
    height: 50vh;
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
