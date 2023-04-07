import styled from "styled-components"

export const Styled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    display: flex;
    margin-bottom: 194px;
    margin-left: 32px;
    margin-top: 29px;
    font-size: 33px;
    font-weight: 700;
    color: #373737;
  }

  h6 {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 19px;
    left: 34px;
  }

  a {
    color: #4088cb;
  }

  input{   
    border: 1px solid lightgray;
    margin-bottom: 10px;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    height: 60px;
    left: 33px;
    top: 403px;
}

  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;
    width: 363px;
  }
  .contrato {
    display: flex;
    flex-direction: column;   
    width: 363px;     
  }
  
  .button-cadastrar {
    width: 365px;
    height: 51px;
    left: 29px;
    top: 587px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 27px;
    border: none;
    color: #ffff;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }
  
.checkbox {
    display: flex;
    align-items: center;
    width: 363px;
    margin-top: 20px;
    gap: 10px;
    font-size: 0.875rem;
    line-height: 19px;
    font-weight: 400;
    font-family: "Noto Sans";
}

.check {
    box-sizing: border-box;
    height: 18px;
    width: 17.85px;
    margin-bottom: 41px;
    border-radius: 2px;
    background: rgba(196, 196, 196, 1);
    border: 1px solid #c4c4c4;
    border-radius: 2px;
}
`