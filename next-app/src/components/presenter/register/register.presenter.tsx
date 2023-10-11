"use client";

import React, {useState} from "react";
import RegisterView from "@/components/view/register/register.view";
import { UserValidation } from "@/models/shared/user/user.validation";
import { IUser } from "@/models/shared/user/user.interface";
import { useRouter } from "next/navigation";

interface RegisterPresenterProps {}

export interface RegisterFormFields{
    name: string,
    surname: string,
    email: string,
    username: string,
    password: string,
    passwordRepeat: string,
}

const RegisterPresenter: React.FC<RegisterPresenterProps> = props => {
    const router = useRouter();
    const [errorString, setErrorString] = useState<string>("");

    const registerUser = async (user: IUser) => {
        //Call register API
        await fetch("/api/users", {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify(user),})
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

    const validateForm = (data: RegisterFormFields) => {
        //Check input format
        try{
            UserValidation.validateUsername(data.username);
            UserValidation.validateName(data.name);
            UserValidation.validateSurname(data.surname);
            UserValidation.validateEmail(data.email);
            UserValidation.validatePassword(data.password);
        }catch(e:any){
            const errorString = e.toString();
            setErrorString(errorString);
            return;
        }

        //Check passwords
        if(data.password != data.passwordRepeat){
            setErrorString("Passwords do not match.");
            return;
        }

        //Try registering user
        try{
            const user : IUser = {
                username : data.username,
                name : data.name,
                surname : data.surname,
                email : data.email,
                password : data.password
            };
            registerUser(user);
        }catch(e:any){
            //Return error
            const errorString = e.toString();
            setErrorString(errorString);
            return;
        }
    };

    return (
        <RegisterView validateForm={validateForm} errorString={errorString}/>
    );
};

export default RegisterPresenter;
