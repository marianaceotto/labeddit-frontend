import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import { Styled } from "./styleHeaderComment"
import { goToLoginPage, goToPostsPage } from "../../router/coordinator"
import logoSmall from "../../assets/logoSmall.png"
import close from "../../assets/close.svg"

const HeaderComment = () => {
  const { context, page, setPage } = useContext(GlobalContext)
  const navigate = useNavigate()

  function logout() {
    window.localStorage.removeItem("labeddit-token")
    context.setIsAuth(false)
    goToLoginPage(navigate)
  }

  return (
    <>
      <Styled>
        <section className="logo">
          <img className="close"
            src={close}
            alt="close"
            onClick={() => {
              goToPostsPage(navigate)
            }}
          />
          <img className="logoSmall" src={logoSmall} alt="logo" />
          <a onClick={() => { 
            logout()}}>Logout</a>
        </section>
      </Styled>
    </>
  )
}

export default HeaderComment