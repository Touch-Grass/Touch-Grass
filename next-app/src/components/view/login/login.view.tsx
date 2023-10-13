import React, { useState } from "react";
import { LoginFormFields } from "@/components/presenter/login/login.presenter";
import ButtonView from "../button/button";
import { ButtonType } from "../button/button";
import "./login.scss";

interface LoginViewProps {
    handleForm: (data:LoginFormFields) => void;
    validating: Boolean;
    errorString: string;
}

const LoginView: React.FC<LoginViewProps> = (
    {
        handleForm,
        validating,
        errorString,
    }
) => {

    const [formData, setFormData] = useState<LoginFormFields>({
        username: "",
        password: "",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
      };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleForm(formData);
      };

    return(
        <div className='process-form'>
            <form onSubmit={handleSubmit}>
                <h2>Log in.</h2>
                <p className={"form-error-string" + (errorString.length > 0 ? "" : "hidden")}>{errorString}</p>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" required value={formData.username} onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" required value={formData.password} onChange={handleChange}/>
                <ButtonView loading={validating} text="Log in" type={ButtonType.DEFAULT}/>
            </form>
        </div>
    );
};

export default LoginView;
