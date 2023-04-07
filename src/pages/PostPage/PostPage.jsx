import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import { goToLoginPage } from "../../router/coordinator"
import { BASE_URL } from "../../constants/url"
import { Styled } from "./stylePostPage"
import HeaderPost from "../../components/HeaderPost/HeaderPost"
import Post from "../../components/Post/Post"

const PostPage = () => {
  const { context, posts, setPosts, fetchPosts } = useContext(GlobalContext)
  const params = useParams()

  const [ content, setContent ] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token")
    if (token) {
      context.setIsAuth(true)
    } else {
      goToLoginPage(navigate)
    }
  }, [context])

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = async () => {
    try {
      const body = {
        content: content,
      }
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      }
      const response = await axios.post(
        `${BASE_URL}/posts/create`,
        body,
        config
      )
      setPosts(response.data)
      fetchPosts()
    } catch (error) {
      console.log(error?.response?.data)
      window.alert(error?.response?.data) 
    }
  }

  return (
    <>
      <HeaderPost />
      <Styled>
        <section className="container-posts">
          <div className="posts">
            <input 
              type="text" 
              placeholder="Escreva seu post..." 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              />
          </div>
          <button className="postar" type="submit" onClick={createPost}>Postar</button>
          <hr />
        </section>  
        <section className="container-posts">
          {Array.isArray(posts) && posts
            .map((post) => {
            return <Post key={post.id} post={post} />
          })
          .reverse()}
        </section>
      </Styled>
    </>
  )
}

export default PostPage