import React, { useState } from "react";
import { RegisterFormFields } from "@/components/presenter/register/register.presenter";
import ButtonView from "../button/button.view";
import { ButtonType } from "../button/button.view";
import Link from "next/link";
import "./register.view.scss";
import LoadingLayoutPresenter from "@/components/presenter/loading-layout/loading-layout.presenter";

interface RegisterViewProps {
    validateForm: (data:RegisterFormFields) => void;
    validating: boolean;
    registrationCompleted: boolean;
    errorString: string;
}

const RegisterView: React.FC<RegisterViewProps> = (
    {
        validateForm,
        validating,
        registrationCompleted,
        errorString,
    }
) =>{

    const [formData, setFormData] = useState<RegisterFormFields>({
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
        passwordRepeat: "",
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
            {(registrationCompleted?
            <div className="process-form-successful">
                <img src={"/Icon_circle_Check_white.png"} width={100} height={100} />
                <p>Registration completed!</p>
                <p>Welcome to the jungle <b>{formData.username}</b>! Click below to start walking with us.</p>
                <Link href='/login'><ButtonView text="Log in" type={ButtonType.DEFAULT}/></Link>
            </div>
            :
            <form onSubmit={handleSubmit}>
                <h2>Sign in.</h2>
                <p className={"form-error-string" + (errorString.length > 0 ? "" : "hidden")}>{errorString}</p>
                <div className="form-label-division">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="surname">Surname</label>
                        <input type="text" name="surname" placeholder="Surname" required value={formData.surname} onChange={handleChange}/>
                    </div>
                </div>

                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Your email" required value={formData.email} onChange={handleChange}/>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" required value={formData.username} onChange={handleChange}/>
                <div className="form-label-division">
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" required value={formData.password} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password-repeat">Repeat your password</label>
                        <input type="password" placeholder="Enter Password" name="passwordRepeat" required value={formData.passwordRepeat} onChange={handleChange}/>
                    </div>
                </div>
                <ButtonView text="Register" type={ButtonType.DEFAULT}/>
            </form>
            )}
        <LoadingLayoutPresenter active={validating}/>
        </div>
    );
};

export default RegisterView;
