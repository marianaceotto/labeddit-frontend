import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { Styled } from "./styleComment"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL } from "../../constants/url"
import axios from "axios"
import up from "../../assets/up.svg"
import down from "../../assets/down.svg"


export function Comment({comment}) {
  const { fetchComments } = useContext(GlobalContext)

  const params = useParams()

  const likeComment = async (commentId) => {
    try {
      let body = {
        like: true,
      }

      await axios.put(`${BASE_URL}/posts/comment/${commentId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit"),
        },
      })

      fetchComments(params.id)

    } catch (error) {
      console.log(error?.response?.data)
      alert(error?.response?.data)
    }
  }

  const dislikeComment = async (commentId) => {
    try {
      let body = {
        like: false,
      }

      await axios.put(`${BASE_URL}/posts/comment/${commentId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit"),
        },
      }),

        fetchComments(params.id)
        
    } catch (error) {
      console.log(error?.response?.data)
      alert(error?.response?.data)
    }
  }

  return (
    <>
      <Styled>
        <section className="posts">
          <h6>Comentário enviado por: {comment.creatorName}</h6>
          <p>{comment.content}</p>
        </section>
        <section className="icons">
          <div>
            <img src={up} alt="like" onClick={() => likeComment(comment.id)} />
            <h6>{comment.likes}</h6>
            <img
              src={down}
              alt="dislike"
              onClick={() => dislikeComment(comment.id)}
            />
            <h6>{comment.dislikes}</h6>
          </div>
        </section>
      </Styled>
    </>
  )
}

export default Comment