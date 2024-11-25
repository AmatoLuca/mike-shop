import styled from 'styled-components';

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;

  .spinner-border {
    width: 3rem; /* Dimensione della spinner */
    height: 3rem;
    border: 0.2em solid rgba(255, 255, 255, 0.1);
    border-top-color: rgb(17, 17, 17); /* Colore del cerchio superiore */
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
