import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f10;
  border: 1px dashed #fff;
  width: 100vw;
  height: 110px;

  h1 {
    font-size: 30px;
    color: #f7f7f7;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
  }

  h3 {
    font-size: 24px;
    color: #f7f7f7;
    padding-bottom: 10px;
    text-align: center;
  }
`;