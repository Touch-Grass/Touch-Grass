import { cookies } from "next/headers";
import {NextApiResponse} from "next";

export class CookieService {
    /* Returns the token inside the TouchGrass-token Cookie */
    public static getCookie():string{
        const cookieStore = cookies();
        const cookie = cookieStore.get("TouchGrass-token");
        let token = "";
        if(cookie)
            token = cookie.value;

        return token;
    }

    /* Returns the token's cookie called TouchGrass-token Cookie */
    public static setCookie(response: NextApiResponse, token : string){
        return response.setHeader("Set-Cookie", "TouchGrass-token="+token+"; HttpOnly; Path=/; Max-Age=3600");
    }

    public static deleteCookie(response: NextApiResponse){
        return response.setHeader("Set-Cookie", "TouchGrass-token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT");
    }
}
