import React from "react";
import Button from "./Button";
import PostService from "./../services/PostService";
export default function PostCreator() {
  const buttonTxt = "Submit";

  async function  createPost() {
    const titleDomElement = document.getElementById("title");
    const title = titleDomElement.value;

    const contentDomElement = document.getElementById("content");
    const content = titleDomElement.value;

    const newPost = { title: title, content: content };
    const newPostJson = JSON.stringify(newPost);
    const responsePromiseId = await PostService.createPost(newPostJson);
    const newPostId = await responsePromiseId.json()
    console.log(newPostId);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>New Post</h1>
      <div style={{ marginBottom: "5%" }}>
        <label>Title </label>
        <input type="text" id="title" name="title" />
      </div>
      <div style={{ backgroundColor: "yellow" }}>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <label>Content</label>
          <textarea id="content" rows="12" cols="52"></textarea>
        </div>
      </div>
      <Button buttonTxt={buttonTxt} callback={createPost} />
    </div>
  );
}
