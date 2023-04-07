import styled from "styled-components"

export const Styled = styled.header`
  display: flex;
  align-items: center;
  img{
    width: 28.02px;
    left: 50%;
    position: fixed;
    transform: translateX(-50%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
  a{
    margin-right: 29px;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: #4088cb;
    cursor: pointer;
  }
  .logo {    
    display: flex;
    width: 100vw;
    height: 50px;
    justify-content: flex-end;
    align-items: center;
    background-color: #ededed;
    background: rgba(237, 237, 237, 1);
  }
`