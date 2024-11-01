import styled from 'styled-components';

export const StyledUserItem = styled.a`
  display: flex;
  align-items: center;
  color: #111111;

  &:hover {
    pointer: cursor;
    color: #707072;
  }

  span {
    font-size: 14px;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  svg {
    font-size: 24px;
    margin: 8px;
  }
`;
