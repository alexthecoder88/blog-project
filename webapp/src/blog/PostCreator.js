import React  , {useState} from "react";
import Button from "./Button";
import PostService from "./../services/PostService";
import TextField from "@material-ui/core/TextField";
import Loader from "./Loader";
export default function PostCreator(props) {


  const spinnerDivContainer = {
    position: "absolute",
    left: "50%",
    top: "98%",
    transform: "translate(-50%, -50%)",
  };

  const buttonTxt = "Submit";
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  async function createPost() {
    setLoading(true)
    const newPost = { title: title, content: content };
    const newPostJson = JSON.stringify(newPost);
    const responsePromiseId = await PostService.createPost(newPostJson);
    const newPostId = await responsePromiseId.json();
    console.log(newPostId);
    if(newPostId != null && newPostId > 0){
      setLoading(false)
      redirecToHomeScreen()
      
    }
  }

  function redirecToHomeScreen() {
    props.history.push("/");
  }

  function showLoader(){
    if(loading){
      return (<Loader />)
    }
  }

  return (
    <div style={{ textAlign: "center", pointerEvents:loading ? "none" : "auto" }}>
      {showLoader}
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
