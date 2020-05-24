export default class PostServices {
  static createPost(newPostJson) {
    const fetchParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newPostJson,
    };

   return fetch("http://192.168.1.3:8080/post", fetchParams);
  }

  static getAllPosts() {
    const fetchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

   return fetch("http://192.168.1.3:8080/post");
  }
}
