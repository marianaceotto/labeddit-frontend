import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL } from "../../constants/url"
import Comment from "../../components/Comment/Comment"
import HeaderComment from "../../components/HeaderComment/HeaderComment"
import Post from "../../components/Post/Post"
import { Styled } from "./styleCommentPage"

const CommentPage = () => {
  const { context, fetchPosts, posts, fetchComments, comments, setComments } =
    useContext(GlobalContext)

  const navigate = useNavigate()
  const params = useParams()

  const [content, setContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState("CommentPage")

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit")
    if (token) {
      context.setIsAuth(true)
    } else {
      goToLoginPage(navigate)
    }
  }, [context])

  useEffect(() => {
    fetchPosts()
  }, [])

  const post = posts.find((post) => post.id === params.id)

  useEffect(() => {
    fetchComments(params.id)
  }, [comments])

  const createComment = async (postId) => {
    try {
      setIsLoading(true)

      const body = {
        content: content,
      }

      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit"),
        },
      }

      const response = await axios.post(
        `${BASE_URL}/posts/comment/${postId}`,
        body,
        config
      )

      setComments(response.data)
      fetchComments(params.id)
      setContent("")

    } catch (error) {
      console.log(error?.response?.data)
      window.alert(error?.response?.data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <HeaderComment />
      <Styled>
      <section className="input">
        <Post post={post} />
        <div className="comment">
          <input
            type="text"
            placeholder="Escreva seu comentário..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={() => createComment(params.id)}
          disabled={isLoading}
        >
          {isLoading ? <div></div> : "Responder"}
        </button>
      </section>
      <hr />
      <section className="posts">
        {Array.isArray(comments) &&
          comments
            .map((comment) => {
            return <Comment key={comment.id} comment={comment} />
          })}
      </section>
      </Styled>
    </>
  )
}

export default CommentPage