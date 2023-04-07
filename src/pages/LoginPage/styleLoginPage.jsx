import styled from "styled-components"

export const Styled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

h1 {
    font-size: 36px;
    height: 47px;
    font-weight: 700;
    color: #373737;
}

h5 {
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    font-style: normal;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

img{
    margin-top: 133px;
    width: 84px;
    height: 84.02px; 
    left: 167px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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

hr {
    width: 363.01px;
    height: 0px;
    margin: 10px 0 10px 0;
    left: 33px;
    top: 656px;
    gap: 10px;
    border-image-slice: 1;
    border-image-source: linear-gradient(
    90deg,
    rgba(255, 100, 137, 1) 0%,
    rgba(249, 178, 78, 1) 100%    
    );
}

.logo{
    display: flex;
    flex-direction: column;  
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 70px;
}
.input{ 
    display: flex;
    flex-direction: column;   
    margin-bottom: 56px;
    width: 363px;
}

.button {
    display: flex;
    flex-direction: column;
    width: 365px;
    justify-content: center;
    align-items: center;
    padding: 13px 133px;    
    gap: 10px;
}
.continuar {
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;    
    border: none;
    width: 365px;
    height: 51px;
    left: 29px;
    top: 587px;  
    color: #ffff;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
}

.cadastrar {
    color:#FE7E02;
    background-color: #ffff;
    border-radius: 27px;
    width: 365px;
    height: 51px;
    left: 29px;
    top: 676px;
    border: 1px solid #FE7E02;
    font-size: 18px;
    font-weight: 700;    
}
`