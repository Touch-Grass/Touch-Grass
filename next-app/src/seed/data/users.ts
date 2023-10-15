import {IUser} from "@/models/shared/user/user.interface";

type UserGenerator = () => IUser;

export const USER_ONE: UserGenerator = () => ({
    username: "RingBearer",
    name: "Frodo",
    surname: "Baggins",
    email: "onering@mordor.tld",
    password: "MtDoomHike1!"
});
