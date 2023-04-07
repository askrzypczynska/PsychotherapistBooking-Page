import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: transparent; 
  > img {
    height: 30px;
    display: flex;
    margin-top: 32px;
    margin-left: 32px;
  }
  > p {
    margin-left: 15px;
    margin-top: 32px;
    font-size: 18px;
    color: white;
  }
  > svg {
    position: fixed;
    color: #3f5c5c ;
    width: 30px;
    right: 0;
    height: 30px;
    margin-top: 32px;
    margin-right: 32px;
    cursor: pointer;
    
  }
`;
