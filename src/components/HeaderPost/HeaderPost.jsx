import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import { Styled } from "./styleHeaderPost"
import { goToLoginPage } from "../../router/coordinator"
import logoSmall from "../../assets/logoSmall.png"

const HeaderPost = () => {
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
          <img src={logoSmall} alt="logo" />
          <a onClick={() => {
            logout()
          setPage("")
          }}>Logout</a>
        </section>
      </Styled>
    </>
  )
}

export default HeaderPost