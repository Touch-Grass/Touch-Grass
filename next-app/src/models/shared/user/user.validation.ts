import {IUser} from "@/models/shared/user/user.interface";
import {User} from "@/models/server/user/user";

export namespace UserValidation {
    export function validateUsername(username: string) {
        const usernamePattern = /^[A-Za-z0-9\s]{2,30}$/;
        if (!usernamePattern.test(username))
            throw new Error("Invalid username");
    }

    export function validateName(name: string) {
        const namePattern = /^[A-Za-z\s]{2,30}$/;
        if (!namePattern.test(name))
            throw new Error("Invalid name");
    }

    export function validateSurname(surname: string) {
        const surnamePattern = /^[A-Za-z\s"-]{2,30}$/;
        if (!surnamePattern.test(surname))
            throw new Error("Invalid surname");
    }

    export function validateEmail(email: string) {
        const emailPattern = /^[a-zA-Z0-9._%+-]{1,30}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email))
            throw new Error("Invalid email");
    }

    export function validatePassword(password: string) {
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!*()])(?!.*\s).{8,20}$/;
        if (!passwordPattern.test(password))
            throw new Error("Invalid password type. It needs to contain 8 to 20 letters. At least one letter in lower case, another one in upper case, one number and one special character");
    }

    export function validateAuthUser(user: IUser) {
        //Check username
        if (!user.username)
            throw new Error("Unexistent username");
        if (typeof user.username !== "string")
            throw new Error("Invalid username type");

        //Check password
        if (!user.password)
            throw new Error("Unexistent password");
        if (typeof user.password !== "string")
            throw new Error("Invalid password type, needs to contain 8 to 20 letters. At least one letter in lower case, another one in upper case, one number and one special character");
    }

    export function validateUser(user: User) {
        if (!user.username)
            throw new Error("Unexistent username");
        if (typeof user.username !== "string")
            throw new Error("Invalid username type");
        validateUsername(user.username);

        if (!user.name)
            throw new Error("Unexistent name");
        if (typeof user.name !== "string")
            throw new Error("Invalid name type");
        validateName(user.name);

        if (!user.surname)
            throw new Error("Unexistent surname");
        if (typeof user.surname !== "string")
            throw new Error("Invalid surname type");
        validateSurname(user.surname);

        if (!user.email)
            throw new Error("Unexistent email");
        if (typeof user.email !== "string")
            throw new Error("Invalid email type");
        validateEmail(user.email);

        if (!user.password)
            throw new Error("Unexistent password");
        if (typeof user.password !== "string")
            throw new Error("Invalid password type, needs to contain 8 to 20 letters. At least one letter in lower case, another one in upper case, one number and one special character");
    
        validatePassword(user.password);
    }
}
