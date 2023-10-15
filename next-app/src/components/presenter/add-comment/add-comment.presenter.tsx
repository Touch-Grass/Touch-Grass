"use client";
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

const AddCommentPresenter: React.FC<AddCommentPresenterProps> = props => {

    const router = useRouter();
    const [errorString, setErrorString] = useState<string>("");
    const [ValidatingState, setValidatingState] = useState<boolean>(false);
    const [RegistrationCompleted, setRegistrationCompleted] = useState<boolean>(false);

    const handleForm = async (comment: Partial<IComment>) => {

        //Call comment API
        setValidatingState(true);

        try {
            //Validate comment
            CommentValidation.validateComment(comment);

            const body = {
                comment: comment,
                trail: props.trail,
            };

            //Send comment
            const response = await fetch("/api/comments", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(body)

            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorString(errorData.error);
            }else{
                setRegistrationCompleted(true);
            }
        } catch (error: any) {
            const errorString = error.toString();
            setErrorString(errorString);
        } finally {
            setValidatingState(false);
        }
    };

    return (
        <AddCommentView addComment={handleForm} errorString={errorString} loadingState={ValidatingState} />
    );
};

export default AddCommentPresenter;
