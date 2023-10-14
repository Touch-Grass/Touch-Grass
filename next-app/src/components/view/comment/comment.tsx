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
        <div className="comment-info"> <div className="comment-user">{props.comment.commenter}</div><div className="comment-date">{props.comment.date}</div></div>
        <div className="comment-text">{props.comment.text}</div>
        </div>
        </>
    );
};

export default CommentComponent;
