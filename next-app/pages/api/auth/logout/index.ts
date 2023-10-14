import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import { CookieService } from "@/services/cookies/service";
import Router from "next/router";

class LogoutHandler extends RequestHandler {
    constructor() {
        super(); // Call the constructor of the parent class
    }

    public async handleGet(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        if(response){
            CookieService.deleteCookie(response);
            response.writeHead(302, { Location: "/logout" });
            response.end();
        }else
            Router.push("/");

    }
}

export default new LogoutHandler().handleRequest;
