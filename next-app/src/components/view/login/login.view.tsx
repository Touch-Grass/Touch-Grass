import React, { useEffect, useState } from "react";
import { LoginFormFields } from "@/components/presenter/login/login.presenter";
import "./login.scss";

interface LoginViewProps {
    validateForm: (data:LoginFormFields) => void;
    errorString: string;
}

const LoginView: React.FC<LoginViewProps> = (
    {
        validateForm,
        errorString,
    }
) => {

    const [errorVisibility, setErrorVisibility] = useState<Boolean>(false);

    useEffect(()=>{
        if(errorString.length > 0)
            setErrorVisibility(true);
        else
            setErrorVisibility(false);
    }, [errorString]);

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
        validateForm(formData);
      };

    return(
        <div className='process-form'>
            <form onSubmit={handleSubmit}>
                <h2>Log in.</h2>
                <p className={"form-error-string" + (errorVisibility?"":" hidden")}>{errorString}</p>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" required value={formData.username} onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" required value={formData.password} onChange={handleChange}/>
                <button type="submit" className='button-orange'>Log in</button>
            </form>
        </div>
    );
};

export default LoginView;
