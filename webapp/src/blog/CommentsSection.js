import React, { useEffect, useState } from "react";
import Button from "./Button";
import CommentService from "./../services/CommentService";
import TextField from "@material-ui/core/TextField";
export default function CommentsSection(props) {
  const [comments, setComments] = useState(null);
  const [stateNewComment, setStateNewComment] = useState(null);
  const [DOMIDOfcommentBeingUpdated, setDOMIDOfcommentBeingUpdated] = useState(null);
  let commentBeingUpdated = null;
  useEffect(() => {
    getPostComments();
  }, []);

  async function getPostComments() {
    const allCommentsPromise = await CommentService.getCommentsbyPostId(props.location.customData.id);
    const allComments = await allCommentsPromise.json();
    console.log(allComments);
    setComments(allComments);
  }

  async function createNewComment() {
    if (stateNewComment != null && stateNewComment != "") {
      const newCommentJson = JSON.stringify({ comment: stateNewComment });
      const newCommentIdPromise = await CommentService.createComment(newCommentJson, props.location.customData.id);
      const newCommentId = await newCommentIdPromise.json();
      if (newCommentId != null && Number(newCommentId) > 0) {
        setStateNewComment("");
        getPostComments();
      }
    }
  }

  function activeEditCommentSection(txtFieldId) {
    const commentTxtFieldElement = document.getElementById(txtFieldId);
    commentTxtFieldElement.style["pointer-events"] = "auto";
    setDOMIDOfcommentBeingUpdated(txtFieldId);
  }

  async function editComment(commentId) {
    if (commentBeingUpdated != null && commentBeingUpdated != "") {
      const commentBeingUpdatedJson = JSON.stringify({ comment: commentBeingUpdated });

      const commentBeingUpdatedIdPromise = await CommentService.updateComment(commentBeingUpdatedJson, commentId);
      const commentBeingUpdatedId = await commentBeingUpdatedIdPromise.json();
      console.log(commentBeingUpdatedId);

      if (commentBeingUpdatedId != null && Number(commentBeingUpdatedId) > 0) {
        setDOMIDOfcommentBeingUpdated(null);
        commentBeingUpdated = null;
      }
    }
  }

  async function deleteComment(commentId) {
    const deletedCommentResponsePromise = await CommentService.deleteComment(commentId);
    const deletedCommentResponse = await deletedCommentResponsePromise.text();
    console.log(deletedCommentResponse);

    if (deletedCommentResponse != null) {
      getPostComments();
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
            onChange={(event) => setStateNewComment(event.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button buttonTxt="CANCEL" callback={() => setStateNewComment("")} />
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
                  <Button buttonTxt="SAVE" callback={() => editComment(comment.id)} />
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

  return <div>{renderCommentsSection()}</div>;
}
