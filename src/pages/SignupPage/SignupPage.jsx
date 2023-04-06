import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL } from "../../constants/url"
import { Styled } from "./styleSignupPage"
import { goToPostsPage } from "../../router/coordinator"
import HeaderSignup from "../../components/HeaderSignup/HeaderSignup"


const SignupPage = () => {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  useEffect(() => {
    if (context.context.isAuth) {
      goToPostsPage(navigate)
    }
  }, [])

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const signup = async () => {
    try {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      }

      const response = await axios.post(`${BASE_URL}/users/signup`, body)

      window.localStorage.setItem("labeddit-token", response.data.token)

      context.context.setIsAutgh(true)

      goToPostsPage(navigate)
    } catch (error) {
      console.log(error?.response?.data)
      alert(error?.response?.data)
    }
  }

  return (
    <>
      <HeaderSignup />
      <Styled>
        <div>
            <h1>Olá, boas vindas ao LabEddit D</h1>
        </div>
        
        <div className="input">
            <input value={form.name} name="name" onChange={onChangeForm} placeholder="Apelido"/>
            <input value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail"/>
            <input value={form.password} name="password" type={ "password"} onChange={onChangeForm} placeholder="Senha"/>         
        </div>
        
        <div className="contrato">
            <p>Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Politica de Privacidade</a></p>
            <p>
                <span>
                    <input className="checkbox"/>
                    <label  htmlFor="check">Eu concordo em receber e-mails sobre coisas legais no Labeddit</label>
                </span>
            </p>
                <button className="button-cadastrar" onClick={signup}>Cadastrar</button>
            </div>
        <Footer />
      </Styled>
    </>
  )
}

export default SignupPage