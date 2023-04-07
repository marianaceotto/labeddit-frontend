import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import {SignupPage} from "../pages/SignupPage/SignupPage"
import PostPage from "../pages/PostPage/PostPage"
import CommentPage from "../pages/CommentPage/CommentPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/posts" element={<PostPage/>} />
                <Route path="/posts/:id/comment" element={<CommentPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router