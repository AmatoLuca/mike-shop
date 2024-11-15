import styled from 'styled-components';

export const StyledButtonSize = styled.button<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  border: 1px solid;
  border-color: ${({ $isActive }) => {
    if ($isActive) return 'rgb(17, 17, 17)';
    if (!$isActive) return '#e5e5e5';
    return 'inherit';
  }};
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffff;

  &:hover {
    cursor: pointer;
    border-color: rgb(17, 17, 17);
  }

  .isActive {
    border-color: rgb(17, 17, 17);
  }
`;
