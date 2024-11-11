import styled from 'styled-components';

export const StyledCarouselCard = styled.div`
  height: 90vw;
  width: 90vw;
  margin: 12px;

  @media (min-width: 576px) {
    height: 50vw;
    width: 60vw;
  }

  @media (min-width: 768px) {
    height: 50vw;
    width: 60vw;
  }

  // DA TESTARE E CONFERMARE
  @media (min-width: 992px) {
    height: 25vw;
    width: 35vw;
  }

  .carouselCardImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
