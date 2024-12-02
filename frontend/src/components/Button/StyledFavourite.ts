import styled from 'styled-components';

export const StyledFavorite = styled.button`
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
  background-color: #ffff;
  letter-spacing: 0.06rem;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  svg {
    font-size: 24px;
  }
`;
