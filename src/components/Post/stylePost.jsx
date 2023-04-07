import styled from "styled-components"

export const Styled = styled.main`
  display: flex;
  padding: 12px;
  width: 22.438rem;
  margin-top: 15px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;

  h6 {
    font-weight: 400;
    font-size: 12px;
    color: #6f6f6f;
  }
  
  .posts {
    h6{
      margin-bottom: 20px;
    }
    p {
      font-weight: 400;
      font-size: 18px;
    }
  }
  
  .icons {
    display: flex;
    margin-top: 23px;
    width: 100%;
    gap:10px;
    div{
      display: flex; 
      align-items: center;
      background: #fbfbfb;
      border: 1px solid #e0e0e0;
      border-radius: 28px;
      padding: 8px;
    }
    h6{
      margin: 0 5px;
    }
  }
`