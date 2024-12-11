import React from 'react';
import { StyledFormContainer } from './StyledFormContainer';

const FormContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledFormContainer>
      <div className="form-container-inner">{children}</div>
    </StyledFormContainer>
  );
};

export default FormContainer;
