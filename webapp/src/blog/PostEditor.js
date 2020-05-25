import React, { useEffect, useState } from "react";
import Button from "./Button";
import CommentsSection from "./CommentsSection";
import TextField from "@material-ui/core/TextField";
import PostService from "./../services/PostService";
export default function PostEditor(props) {
  const buttonTxt = "Save changes";
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);


  useEffect(() => {
    console.log(props);
    if(props.location.customData == null && props.location.customData == undefined) {
        props.history.push("/");
    }else {
        setTitle(props.location.customData.title);
        setContent(props.location.customData.content);
    }

  }, []);

  async function updatePost() {
    const updatedPost = { title: title, content: content };
    console.log(updatedPost)
    const newupdatedPostJson = JSON.stringify(updatedPost);
    const updatedPostResponsePromiseId = await PostService.updatePost(newupdatedPostJson , props.location.customData.id);
    const updatedPostId = await updatedPostResponsePromiseId.json();
    console.log(updatedPostId);
  }

  return (
    <div style={{ textAlign: "center"}}>
      {props.location.customData != null && (
        <>
          <h1>Edit Post</h1>
          <div style={{ marginBottom: "5%"  }}>
            <TextField fullWidth id="standard-required" label="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <TextField
                id="outlined-multiline-static"
                label="Content"
                multiline
                rows={5}
                variant="outlined"
                style={{ width: "120%" }}
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </div>
          </div>
          <Button buttonTxt={buttonTxt} callback={updatePost} />
          <CommentsSection {...props} />
        </>
      )}
    </div>
  );
}
