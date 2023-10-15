import React from "react";
import "./comment.scss";
import { IUser } from "@/models/shared/user/user.interface";
import { ServerCommentWithID } from "@/models/server/comment/comment";
import { User } from "@/models/server/user/user";
import type {Ref} from "@typegoose/typegoose";

interface Commentprops {
    comment:ServerCommentWithID;
    user: Ref<User>;
}

const CommentComponent: React.FC<Commentprops> = (props) => {
    const {comment, user} = props;
    return (
      <>
        <div className="comment-container">
        <div className="comment-title">{comment.title}</div>
        <div className="comment-text">{comment.text}</div>
        <div className="comment-user"> 
        <div className="comment-commenter">{user.id}</div> </div>
        </div>
        </>
    );
};

export default CommentComponent;
