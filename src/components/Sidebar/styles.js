import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    position: fixed;
    height: 100%;
    right: 0px;
    width: 300px;
    right: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: #3f5c5c;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-top: 32px;
    top: 0;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
    margin-top: 100px;
`;