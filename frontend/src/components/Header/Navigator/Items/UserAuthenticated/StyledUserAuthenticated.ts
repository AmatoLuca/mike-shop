import styled from 'styled-components';

export const StyledUserAuthenticated = styled.div`
  display; flex;
  align-items: center;
  padding-top: 5px;

  .filler {
    background-color: rgb(245 245 245);
    height: 17px;
    margin-bottom: 24px;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
    height: 100%;
  }

  .dropdown-button {
    margin: 8px;
    font-size: 14px;
    color: #111111;
    border: none;
    background-color: inherit;
    letter-spacing: 0.03rem;

     &:hover {
      cursor: pointer;
      color: #707072;
    }
  }

  .dropdown-menu {
    display: block;
    position: absolute;
    left: -80px;
    background-color: #fff;
    color: #707072;
    z-index: 1;
    padding-bottom: 14px;
    width: 200px;
  }

  .dropdown-item {
    padding-bottom: 16px;
    padding-left: 24px;
    padding-right: 24px;
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 0.03rem;

    &:hover {
      color: #707072;
    }   
  }

  .dropdown-item:hover {
    color: #111111;
  }
`;
