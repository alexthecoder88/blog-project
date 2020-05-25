export default class PostServices {

static httpBaseUrl  = () => window.$HTTP_BASE_URL


  static createPost(newPostJson) {
    const test = window.$HTTP_BASE_URL
    console.log(test)

    debugger
  
    const fetchParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newPostJson,
    };

   return fetch(window.$HTTP_BASE_URL+"post", fetchParams);
  }

  static getAllPosts() {
    const fetchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

   return fetch(window.$HTTP_BASE_URL+"post");
  }

  static deletePost(postId) {
    const fetchParams = {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

   return fetch(window.$HTTP_BASE_URL+"post/"+postId, fetchParams);
  }

  static updatePost(updatedPostJson , postId) {
    const fetchParams = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: updatedPostJson,
    };

   return fetch(window.$HTTP_BASE_URL+"post/"+postId, fetchParams);
  }
}
