export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToSignupPage = (navigate) => {
    navigate("/signup")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToPostsPage = (navigate) => {
    navigate("/posts")
}

export const goToCommentPage = (navigate, postId) => {
    navigate(`/posts/${postId}/comment`)
}