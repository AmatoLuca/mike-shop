import styled from 'styled-components';
import { Color } from './models';

export const StyledButton = styled.div<{ $inputColor: Color }>`
  font-size: 16px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  padding-right: 18px;
  border-radius: 30px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  border: 1px solid #919191;

  &:hover {
    background-color: #919191;
    cursor: pointer;
  }

  background-color: ${({ $inputColor }) => {
    if ($inputColor === 'black') return '#111111';
    if ($inputColor === 'white') return '#ffffff';
    return 'inherit'; // Valore di default se non corrisponde a black o white
  }};

  color: ${({ $inputColor }) => {
    if ($inputColor === 'black') return '#ffffff ';
    if ($inputColor === 'white') return '#111111';
    return 'inherit'; // Valore di default se non corrisponde a black o white
  }};
`;
