"use client";

import React, {useState} from "react";
import LoginView from "@/components/view/login/login.view";
import { UserValidation } from "@/models/shared/user/user.validation";
import { IUser } from "@/models/shared/user/user.interface";
import { useRouter } from "next/navigation";

interface LoginPresenterProps {}

export interface LoginFormFields{
    username: string;
    password: string;
}

const LoginPresenter: React.FC<LoginPresenterProps> = props => {

    const router = useRouter();
    const [errorString, setErrorString] = useState<string>("");
    const [ValidatingState, setValidatingState] = useState<Boolean>(false);

    const loginUser = async (user: Partial<IUser>) => {
        setValidatingState(true);

        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorString(errorData.error);
            } else {
                router.push("/");
            }
        } catch (error: any) {
            console.error("Error:", error);
            const errorString = error.toString();
            setErrorString(errorString);
        } finally {
            setValidatingState(false);
        }
      };

    const handleForm = (data: LoginFormFields) => {
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
        <LoginView validating={ValidatingState} handleForm={handleForm} errorString={errorString}/>
    );
};

export default LoginPresenter;
