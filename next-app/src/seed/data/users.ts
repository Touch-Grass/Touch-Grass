import {IUser} from "@/models/shared/user/user.interface";

type UserGenerator = () => IUser;

export const USER_ONE: UserGenerator = () => ({
    username: "RingBearer",
    name: "Frodo",
    surname: "Baggins",
    email: "onering@mordor.tld",
    password: "MtDoomHike1!"
});

export const USER_TWO: UserGenerator = () => ({
    username: "admin",
    name: "admin",
    surname: "admin",
    email: "admin@admin.com",
    password: "Administrator1!"
});

