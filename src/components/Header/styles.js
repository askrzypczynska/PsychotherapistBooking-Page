import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: transparent; 
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
