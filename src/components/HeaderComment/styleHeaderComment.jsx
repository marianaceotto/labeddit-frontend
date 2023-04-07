import styled from "styled-components"

export const Styled = styled.header`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: #4088cb;
    cursor: pointer;
    margin-right: 29px;
  }
  .logo {    
    display: flex;
    width: 100vw;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    background-color: #ededed;
    background: rgba(237, 237, 237, 1);
  }
  .logoSmall {
    width: 28.02px;
    height: 31.67px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    cursor: pointer;
  }
  .close {
    display: flex;
    width: 25.6px;
    margin-left: 29px;
    height: 24px;
    padding: 1px;
    align-items: center;
    cursor: pointer; 
  }
`