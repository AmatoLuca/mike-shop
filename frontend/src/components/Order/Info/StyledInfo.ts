import styled from 'styled-components';

export const StyledInfo = styled.div<{ $color: string }>`
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  letter-spacing: 0.03rem;

  color: ${(props) => props.$color};
`;
