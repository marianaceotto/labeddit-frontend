import React from "react"
import { useNavigate } from "react-router-dom"
import { Styled } from "./styleHeaderSignup"
import { goToHomePage } from "../../router/coordinator"
import logoSmall from "../../assets/logoSmall.png"

const HeaderSignup = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <Styled>
        <section className="logo">
          <img src={logoSmall} alt="logo" />
          <a onClick={() => goToHomePage(navigate)}>Logout</a>
        </section>
      </Styled>
    </>
  )
}

export default HeaderSignup