export default class CommentService {

  httpBaseUrl = process.env.REACT_APP_HTTP_BASE_URL

  static getCommentsbyPostId(postId) {
    console.log(postId);
    return fetch(window.$HTTP_BASE_URL+"post/" + postId + "/comments");
  }

  static createComment(newCommentJson , postId) {
    debugger
    const fetchParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newCommentJson,
    };

   return fetch(window.$HTTP_BASE_URL+"post/"+postId+"/comment", fetchParams);
  }

  static updateComment(newCommentJson , postId) {

    const fetchParams = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newCommentJson,
    };

   return fetch(window.$HTTP_BASE_URL+"post/"+postId+"/comments", fetchParams);
  }

  static deleteComment(commentId) {

    const fetchParams = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    
   return fetch(window.$HTTP_BASE_URL+"post/"+commentId+"/comments", fetchParams);
  }

}
