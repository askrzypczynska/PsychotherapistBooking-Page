import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white; 
  font-size: 20px;
  color: black;
  padding: 10px;
  cursor: pointer;
  border-radius: 20px;
  margin: 0 15px 20px;
  > svg {
    margin: 0 20px;
  }
  &:hover {
    background-color: #3f5c5c;
    color: white;
  }
    
`;