import styled from 'styled-components';

export const StyledCheckoutSteps = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 70px;
  gap: 14px;

  @media (min-width: 500px) {
    justify-content: center;
    gap: 20px;
  }
`;
