"use client";
import React, {useState} from "react";
import EditAccountView from "@/components/view/editAccount/editAccount.view";

interface EditAccountPresenterProps {}

const EditAccountPresenter: React.FC<EditAccountPresenterProps> = props => {
    function changeProfilePicture(imageUrl:string){
        console.log("save new profile picture here");
        console.log(imageUrl);
    }
    return (
        <EditAccountView onProfilePicChanged={changeProfilePicture}/>
    );
};

export default EditAccountPresenter;