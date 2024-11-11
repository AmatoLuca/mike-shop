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
  align-items: center;
  gap: 4px;
  border: 1.5px solid #919191;

  &:hover {
    background-color: ${({ $inputColor }) => {
      if ($inputColor === 'black') return ' #919191';
      if ($inputColor === 'white') return '#ffffff';
      return 'inherit'; // Valore di default se non corrisponde a black o white
    }};

    border-color: ${({ $inputColor }) => {
      if ($inputColor === 'black') return '#919191';
      if ($inputColor === 'white') return '#111111';
      return 'inherit'; // Valore di default se non corrisponde a black o white
    }};

    cursor: pointer;
  }

  svg {
    color: ${({ $inputColor }) => {
      if ($inputColor === 'black') return '#ffffff';
      if ($inputColor === 'white') return '#111111';
      return 'inherit'; // Valore di default se non corrisponde a black o white
    }};
    font-size: 24px;
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

  border-color: ${({ $inputColor }) => {
    if ($inputColor === 'black') return '#111111';
    if ($inputColor === 'white') return '#919191';
    return 'inherit'; // Valore di default se non corrisponde a black o white
  }};
`;
