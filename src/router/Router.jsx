import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import PostPage from "../pages/PostPage/PostPage"
import CommentPage from "../pages/CommentPage/CommentPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/posts" element={<PostPage/>} />
                <Route path="/posts/:id/comment" element={<CommentPage/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router