import styled from 'styled-components';

export const StyledWidjet = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  width: 154px;

  .widjet-container {
    border: 1px solid #e5e5e5;
    border-radius: 30px;
    width: 100px;
    overflow: hidden;

    .widjet-inner {
      display: flex;
      justify-content: space-between;

      .widjet-btn-minus,
      .widjet-btn-trash {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        height: 40px;
        width: 40px;
        min-height: 40px;
        min-width: 40px;
        background-color: #ffff;
        border: 1px solid transparent;
        border-radius: 50%;
        font-size: 16px;

        &:hover {
          background-color: #e5e5e5;
          cursor: pointer;
        }
      }

      .widjet-counter {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
      }

      .widjet-btn-plus {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        height: 40px;
        width: 40px;
        min-height: 40px;
        min-width: 40px;
        background-color: #ffff;
        border: 1px solid transparent;
        border-radius: 50%;
        font-size: 16px;

        &:hover {
          background-color: #e5e5e5;
          cursor: pointer;
        }
      }
    }
  }

  .widjet-btn-favorite {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    background-color: #ffff;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    font-size: 15px;

    &:hover {
      background-color: #e5e5e5;
      cursor: pointer;
    }

    svg {
      font-size: 16px;
    }
  }
`;
