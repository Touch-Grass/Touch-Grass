import React from "react";
import "./comment.scss";
import { IUser } from "@/models/shared/user/user.interface";
import { ITrail } from "@/models/shared/trail/trail.interface";
import { ServerCommentWithID } from "@/models/server/comment/comment";
import { IComment } from "@/models/shared/comment/comment.interface";

interface Commentprops {
    comment:ServerCommentWithID;
    user: IComment;
}

const CommentComponent: React.FC<Commentprops> = (props) => {
    const {comment, user} = props;
    return (
      <>
        <div className="comment-container">
        <div className="comment-title">{comment.title}</div>
        <div className="comment-text">{comment.text}</div>
        <div className="comment-user"> 
        <div className="comment-commenter">{user.commenter.username}</div> </div>
        </div>
        </>
    );
};

export default CommentComponent;
