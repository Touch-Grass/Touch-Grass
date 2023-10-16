import React from "react";
import "./comment.scss";
import { IUser } from "@/models/shared/user/user.interface";
import { ServerCommentWithID } from "@/models/server/comment/comment";
import { User } from "@/models/server/user/user";
import type {Ref} from "@typegoose/typegoose";
import UserRepresentationView from "../user-representation/user-representation.view";
import moment from "moment";
import ButtonView, { ButtonType } from "../button/button.view";

interface Commentprops {
    comment:ServerCommentWithID;
    user: User; //username flags like an err in vscode but works in practice 
}

const CommentComponent: React.FC<Commentprops> = (props) => {
    const {comment, user} = props;

    return (
      <>
        <div className="comment-container">
        <div className="comment-title">{comment.title}</div>
        <div className="comment-text">{comment.text}</div>
        <div className="comment-user-date"> <UserRepresentationView userName={user.username}></UserRepresentationView> <div>{moment(comment.date).format("DD/MM/YYYY")}</div></div>
        </div>
        </>
    );
};

export default CommentComponent;
