"use client";

import React, {useState} from "react";
import LoginView from "@/components/view/login/login.view";
import { UserValidation } from "@/models/shared/user/user.validation";
import { IUser } from "@/models/shared/user/user.interface";
import { useRouter } from "next/navigation";

interface LoginPresenterProps {}

export interface LoginFormFields{
    username: string,
    password: string,
}

const LoginPresenter: React.FC<LoginPresenterProps> = props => {

    const router = useRouter();
    const [errorString, setErrorString] = useState<string>("");

    const loginUser = async (user: Partial<IUser>) => {
        //Call register API
        await fetch("/api/auth", {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify(user),})
            .then(async (response) => {
                //Return error
              if (!response.ok) {
                const errorData = await response.json();
                setErrorString(errorData.error);
              }else
                router.push("/");
            })
            .catch((error) => {
                //Return error
                console.error("Error:", error);
                const errorString = error.toString();
                setErrorString(errorString);
            });
    };

    const validateForm = (data: LoginFormFields) => {
        //Check input format
        try{
            UserValidation.validateUsername(data.username);
            UserValidation.validatePassword(data.password);
        }catch(e:any){
            const errorString = e.toString();
            setErrorString(errorString);
            return;
        }

        //Try registering user
        try{
            const user : Partial<IUser> = {
                username : data.username,
                password : data.password
            };
            loginUser(user);
        }catch(e:any){
            //Return error
            const errorString = e.toString();
            setErrorString(errorString);
            return;
        }
    };


    return (
        <LoginView validateForm={validateForm} errorString={errorString}/>
    );
};

export default LoginPresenter;
