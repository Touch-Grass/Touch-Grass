"use client"
import AddCommentView from "@/components/view/add-comment/add-comment.view";
import React, { useState } from "react";
import { CommentsService } from "@/services/comments/comments.service";
import { IComment } from "@/models/shared/comment/comment.interface";
import { CookieService } from "@/services/cookies/service";
import { AuthService } from "@/services/auth/service";
import { ITrail } from "@/models/shared/trail/trail.interface";
import { IUser } from "@/models/shared/user/user.interface";
import dbConnect from "@/lib/dbConnection";
import { UserValidation } from "@/models/shared/user/user.validation";
import { useRouter } from "next/router";
import { CommentValidation } from "@/models/shared/comment/comment.validation";
import { cookies } from "next/headers";


interface AddCommentPresenterProps {
    trail: ITrail<IUser>;

}
export interface CommentFormFields{
    title: string;
    text: string;
    trail:ITrail;
}

const AddCommentPresenter: React.FC<AddCommentPresenterProps> = async props => {
    await dbConnect();

    /*let errorString="";
const sendComment = async (data: CommentFormFields) => {
 
  try{
    const commenterCookie= await AuthService.getUserInfoFromToken(CookieService.getCookie());
    if(commenterCookie!=null){

        const comment : IComment= {
            title: data.title,
            commenter: commenterCookie,
            text: data.text,
            date: Date.now(), 
            trail: data.trail,
        }
        CommentsService.addComment(comment);

}}catch(e:any){
    const errorString = e.toString();
}}*/
const router = useRouter();
    const [errorString, setErrorString] = useState<string>("");
    const [ValidatingState, setValidatingState] = useState<boolean>(false);
    const [RegistrationCompleted, setRegistrationCompleted] = useState<boolean>(false);

const sendComment = async (comment: IComment) => {
    //Call comment API
    setValidatingState(true);

    try {
        const response = await fetch("/api/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
        });

        if (response.status === 500)
            setErrorString("Internal Server Error");
        else if (!response.ok) {
            const errorData = await response.json();
            setErrorString(errorData.error);
        }else{
            setRegistrationCompleted(true);
        }
    } catch (error: any) {
        if (error instanceof Response && error.status === 500){
            setErrorString("Server Internal Error");
        } else {
            console.error("Error:", error);
            const errorString = error.toString();
            setErrorString(errorString);
        }
    } finally {
        setValidatingState(false);
    }
};

const validateForm = (data: CommentFormFields) => {
    //Check input format
    try{
        CommentValidation.validatetitle(data.title);
        CommentValidation.validatetext(data.text);
    }catch(e:any){
        const errorString = e.toString();
        setErrorString(errorString);
        return;
    }

    //Try sending comment
    try{
    
        

        const comment : IComment = {
            commenter : ,
            title : data.title,
            text : data.text,
            date : Date.now(),
            trail : data.trail
        };
        sendComment(comment);
    }catch(e:any){
        //Return error
        const errorString = e.toString();
        setErrorString(errorString);
        return;
    }
};
return (
    <AddCommentView addComment={validateForm} errorString={errorString}/>
);}

export default AddCommentPresenter;