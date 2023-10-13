import React, { useState } from "react";
import { RegisterFormFields } from "@/components/presenter/register/register.presenter";
import "./register.view.scss";

interface RegisterViewProps {
    validateForm: (data:RegisterFormFields) => void;
    errorString: string;
}

const RegisterView: React.FC<RegisterViewProps> = (
    {
        validateForm,
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
            <form onSubmit={handleSubmit}>
                <h2>Sign in.</h2>
                <p className='form-error-string'>{errorString}</p>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange}/>
                <label htmlFor="surname">Surname</label>
                <input type="text" name="surname" placeholder="Surname" required value={formData.surname} onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Your email" required value={formData.email} onChange={handleChange}/>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" required value={formData.username} onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" required value={formData.password} onChange={handleChange}/>
                <label htmlFor="password-repeat">Repeat your password</label>
                <input type="password" placeholder="Enter Password" name="passwordRepeat" required value={formData.passwordRepeat} onChange={handleChange}/>
                <button type="submit" className='button-orange'>Register</button>
            </form>
        </div>
    );
};

export default RegisterView;
