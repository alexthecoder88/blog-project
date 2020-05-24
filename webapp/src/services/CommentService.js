export default class CommentService {
  static getCommentsbyPostId(postId) {
    console.log(postId);
    return fetch("http://192.168.1.3:8080/post/" + postId + "/comments");
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

   return fetch("http://192.168.1.3:8080/post/"+postId+"/comment", fetchParams);
  }

  static updateComment(newCommentJson , postId) {

    const fetchParams = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newCommentJson,
    };

   return fetch("http://192.168.1.3:8080/post/"+postId+"/comment", fetchParams);
  }

  static deleteComment(commentId) {

    const fetchParams = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

   return fetch("http://192.168.1.3:8080/post/"+commentId+"/comments", fetchParams);
  }

}
