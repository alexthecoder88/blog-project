import React, { useEffect, useState, useCallback } from "react";
import Button from "./Button";
import CommentService from "./../services/CommentService";
import TextField from "@material-ui/core/TextField";
export default function PostEditor(props) {
  const buttonTxt = "Save changes";
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [comments, setComments] = useState(null);
  const [stateNewComment, setStateNewComment] = useState(null);
  const [DOMIDOfcommentBeingUpdated, setDOMIDOfcommentBeingUpdated] = useState(null);
  let commentBeingUpdated = null;
  let newComment = null;
  useEffect(() => {
    console.log(props);
    setTitle(props.location.customData.title);
    setContent(props.location.customData.content);
    getPostComments();
  }, []);

  async function getPostComments() {
    const allCommentsPromise = await CommentService.getCommentsbyPostId(props.location.customData.id);
    const allComments = await allCommentsPromise.json();
    console.log(allComments);
    if (allComments != null && allComments.length > 0) {
        setComments(null);
      setComments(allComments);
    }
  }

  async function createNewComment() {
    const newCommentJson = JSON.stringify({ comment: newComment });
    const newCommentIdPromise = await CommentService.createComment(newCommentJson, props.location.customData.id);
    const newCommentId = await newCommentIdPromise.json();
    if (newCommentId != null && Number(newCommentId) > 0) {
      setStateNewComment("");
      newComment = null;
    }
  }

   function activeEditCommentSection(txtFieldId) {
    const commentTxtFieldElement = document.getElementById(txtFieldId);
    commentTxtFieldElement.style["pointer-events"] = "auto";
    setDOMIDOfcommentBeingUpdated(txtFieldId);

  }


  async function editComment(){
    const commentBeingUpdatedJson = JSON.stringify({ comment: commentBeingUpdated });

    const commentBeingUpdatedIdPromise = await CommentService.updateComment(commentBeingUpdatedJson, props.location.customData.id);
    const commentBeingUpdatedId = await commentBeingUpdatedIdPromise.json();
    console.log(commentBeingUpdatedId);

    if (commentBeingUpdatedId != null && Number(commentBeingUpdatedId) > 0) {
      setDOMIDOfcommentBeingUpdated(null);
      commentBeingUpdated = null;
    }
  }

  async function deleteComment(commentId){

    const deletedCommentResponsePromise = await CommentService.deleteComment(commentId);
    const deletedCommentResponse = await deletedCommentResponsePromise.text();
    console.log(deletedCommentResponse);

    if (deletedCommentResponse != null) {
        getPostComments()
    }
  }

  function renderCommentsSection() {
    function renderNewCommentZone() {
      return (
        <div style={{ marginBottom: "10%" }}>
          <TextField
            multiline
            fullWidth
            id="standard-required"
            label="New comment"
            value={stateNewComment}
            onChange={(event) => (newComment = event.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button buttonTxt="CANCEL" />
            <Button buttonTxt="ADD" callback={createNewComment} />
          </div>
        </div>
      );
    }

    function renderExistingComments() {
      if (comments != null) {
        return comments.map((comment) => {
          const txtFieldId = "comment-container-" + comment.id;
          return (
            <div style={{ marginBottom: "10%" }}>
              <div id={txtFieldId} style={{ pointerEvents: DOMIDOfcommentBeingUpdated !== txtFieldId ? "none" : "auto" }}>
                <TextField multiline fullWidth defaultValue={comment.comment} onChange={(event) => (commentBeingUpdated = event.target.value)} />
              </div>

              {DOMIDOfcommentBeingUpdated !== txtFieldId ? (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button buttonTxt="DELETE" callback={() => deleteComment(comment.id)} />
                  <Button
                    buttonTxt="EDIT"
                    callback={() => {
                        activeEditCommentSection(txtFieldId);
                    }}
                  />
                </div>
              ) : (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button buttonTxt="CANCEL" />
                  <Button buttonTxt="SAVE" callback={editComment} />
                </div>
              )}
            </div>
          );
        });
      }
    }

    return (
      <div style={{ marginTop: "25%" }}>
        <h2>Comments:</h2>
        {renderNewCommentZone()}
        {renderExistingComments()}
      </div>
    );
  }

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
          {renderCommentsSection()}
        </>
      )}
    </div>
  );
}
