import React from "react";
import "./comment.scss";
import { IUser } from "@/models/shared/user/user.interface";
import { ITrail } from "@/models/shared/trail/trail.interface";
import { ServerCommentWithID } from "@/models/server/comment/comment";

interface Commentprops {
    comment:ServerCommentWithID;
}

const CommentComponent: React.FC<Commentprops> = (props) => {
    return (
      <>
        <div className="comment-container">
        <div className="comment-title">{props.comment.title}</div>
        <div className="comment-text">{props.comment.text}</div>
        <div className="comment-user"> 
        <div className="comment-commenter">{props.comment.commenter.username}</div> </div>
        </div>
        </>
    );
};

export default CommentComponent;
