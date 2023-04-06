import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL } from "../../constants/url"
import { goToLoginPage } from "../../router/coordinator"
import { Styled } from './styleHomePage'
import Post from "../../components/Post/Post"
import HeaderPost from "../../components/HeaderPost"

export default function HomePage() {
  const navigate = useNavigate()

  const context = useContext(GlobalContext)
  const { posts, fetchPosts } = context

  const [isLoading, setIsLoading] = useState(false)
  const [content, setContent] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token")

    if (!token) {
      goToLoginPage(navigate)
    } else {
      fetchPosts()
    }
  }, [])

  const createPosts = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const token = window.localStorage.getItem("labeddit-token")

      const config = {
        HeaderPosts: {
          Authorization: token
        }
      }

      const body = {
         content
      }

      await axios.post(BASE_URL + "/posts", body, config)

      setContent("")
      setIsLoading(false)
      fetchPosts()
    } catch (error) {
      console.error(error?.response?.data)
      window.alert(error?.response?.data)
    }
  }

  console.log(posts)
  return (
    <>
      <HeaderPost/>
          <Styled>
        <section className= "PostBox">
            <input
              type="text"
              placeholder="Escreva seu post..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          <button type="submit" onClick={createPosts}>
            Postar
          </button>
        </section>

        <hr />
        <section className="posts">
          {posts.Post?.map((post) => {
              return <Post  key={post.id} post={post} />
            })
            .reverse()}
        </section>
      </Styled>
    </>
  )
}