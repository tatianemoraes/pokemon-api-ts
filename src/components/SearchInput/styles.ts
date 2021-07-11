import styled from 'styled-components';

export const Container = styled.div`
  .search-input {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 30px;
  

    label {
      font-size: 20px;
      color: #000;
    }

    input {
      margin-left: 10px;
      width: 200px;
      height: 25px;
      outline: none;
      padding-left: 5px;
    }

    button {
      width: 100px;
      height: 25px;
      font-weight: 400;
      background: #f10;
      color: #fff;
      border-radius: 4px;
      outline: none;
      border: none;
      margin-left: 10px;
      cursor: pointer;

      &:hover {
        background-color: #f10;
        opacity: 0.8;
      }
    }

  }
`;