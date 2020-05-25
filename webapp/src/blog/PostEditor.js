import React, { useEffect, useState } from "react";
import Button from "./Button";
import CommentsSection from "./CommentsSection";


export default function PostEditor(props) {
  const buttonTxt = "Save changes";
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  useEffect(() => {
    console.log(props);
    setTitle(props.location.customData.title);
    setContent(props.location.customData.content);
  }, []);



  return (
    <div style={{ textAlign: "center" }}>
      {props.location.customData != null && (
        <>
          <h1>Edit Post</h1>
          <div style={{ marginBottom: "5%" }}>
            <label>Title </label>
            <input type="text" id="title" name="title" value={title} />
          </div>
          <div style={{ backgroundColor: "yellow" }}>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <label>Content</label>
              <textarea id="content" rows="12" cols="52" value={content}></textarea>
            </div>
          </div>
          <Button buttonTxt={buttonTxt} />
          <CommentsSection {...props}/>
        </>
      )}
    </div>
  );
}
