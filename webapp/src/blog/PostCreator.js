import React  , {useState} from "react";
import Button from "./Button";
import PostService from "./../services/PostService";
import TextField from "@material-ui/core/TextField";
export default function PostCreator(props) {
  const buttonTxt = "Submit";
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  async function createPost() {
    const newPost = { title: title, content: content };
    const newPostJson = JSON.stringify(newPost);
    const responsePromiseId = await PostService.createPost(newPostJson);
    const newPostId = await responsePromiseId.json();
    console.log(newPostId);
    if(newPostId != null && newPostId > 0){
      redirecToHomeScreen()
    }
  }

  function redirecToHomeScreen() {
    props.history.push("/");
  }


  return (
    <div style={{ textAlign: "center" }}>
      <h1>New Post</h1>
      <div style={{ marginBottom: "10%" }}>
      <TextField id="standard-required" label="Title" value={title} onChange={(event) => setTitle(event.target.value) } />
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={5}
            variant="outlined"
            style={{ width: "150%" }}
            value={content} 
            onChange={(event) => setContent(event.target.value) }
          />
        </div>
      </div>
      <Button buttonTxt={buttonTxt} callback={createPost} />
    </div>
  );
}
