import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL } from "../../constants/url"
import {goToCommentPage} from "../../router/coordinator"
import { Styled } from "./stylePost"
import up from "../../assets/up.svg"
import down from "../../assets/down.svg"
import commentPost from "../../assets/commentPost.svg"


export function Post({ post }) {
  const {context, posts, setPosts, fetchPosts, page, setPage } = useContext(GlobalContext)
  const [comment, setComment] = useState([])

  const navigate = useNavigate()

  const likePost = async (postId) => {
    try {
      let body = {
        like: true,
      }
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      })
      fetchPosts()
    } catch (error) {
      console.log(error?.response?.data)
      alert(error?.response?.data)      
    }
  }

  const dislikePost = async (postId) => {
    try {
      let body = {
        like: false,
      }
      await axios.put(`${BASE_URL
      }/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      }),
      fetchPosts()
    } catch (error) {
      console.log(error?.response?.data)
      alert(error?.response?.data)      
    }
  }

  const fetchComments = async (postId) => {
    try {
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      }
      const response = await axios.get(
        `${BASE_URL}/posts/comment/${postId}`,
        config
      )
      setComment(response.data)
    } catch (error) {
      console.log(error?.response?.data)
      alert(error?.response?.data)      
    }
  }

  useEffect(() => {
    fetchComments(post.id)
  }, [])

  return (
    <>
      <Styled>
        <section className="posts">
          <h6>Enviador por: {post?.creator?.name}</h6>
          <p>{post.content}</p>
        </section>
        <section className="icons">
         
          <div> 
            <img src={up} alt="like" onClick={() => likePost(post.id)} />  
            <h6>{post.likes}</h6>
            <img src={down} alt="dislike" onClick={() => dislikePost(post.id)} /> 
            <h6>{post.dislikes}</h6>
         </div>          
          <div onClick={() => {
            goToCommentPage(navigate, post.id)
            setPage("commentPage")
          }}
          >
            <img src={commentPost} alt="" />
            <h6>{comment.length}</h6>
          </div>        
        </section>
      </Styled>
    </>
  )
}

export default Post