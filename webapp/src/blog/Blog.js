import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import Button from "./Button";
import PostService from "./../services/PostService";
import Loader from "./Loader";
export default function Blog(props) {

  const spinnerDivContainer = {
    position: "absolute",
    left: "50%",
    top: "98%",
    transform: "translate(-50%, -50%)",
  };
  
  const buttonTxt = "Create new post";
  const [allPosts, setAllPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    getAllPosts();
  }, []);

  async function getAllPosts() {
    const allPostsPromise = await PostService.getAllPosts();
    const allPosts = await allPostsPromise.json();
    console.log(allPosts);
    if(allPosts !=null){
      debugger
      setAllPosts(allPosts);
      setLoading(false)
    }
    
  }

  async function deletePost(postId){
    const deletePostResponse = await PostService.deletePost(postId);
    console.log(deletePostResponse.status )
    if(deletePostResponse.status >= 200 && deletePostResponse.status <= 300 ){
      getAllPosts();
    }
  }

  function redirecToPostCreatorScreen() {
    props.history.push("/newpost");
  }

  function renderAllPosts() {
    if (allPosts != null) {
      return allPosts.map((post) => {
        return (
          <div style={{margin:"5%"}}>
            <BlogPost key={post.id} {...props} {...post} deletePost={() => deletePost(post.id)} />
          </div>
        );
      });
    }
  }

  function showLoader(){
    if(loading){
      return (<Loader />)
    }
  }

  return (
    <div style={{ textAlign: "center",pointerEvents:loading ? "none" : "auto" }}>
      {showLoader()}
      <h1>Alexandro's blog</h1>
      <Button {...props} callback={redirecToPostCreatorScreen} buttonTxt={buttonTxt} />
      {renderAllPosts()}
    </div>
  );
}
