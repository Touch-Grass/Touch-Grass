import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import { CookieService } from "@/services/cookies/service";
import Router from "next/router";
import { HttpStatus } from "@/utils/HTTPError/HTTPUtils";

class LogoutHandler extends RequestHandler {
    constructor() {
        super(); // Call the constructor of the parent class
    }

    public async handleGet(request: NextApiRequest, response: NextApiResponse): Promise<void> {
        //This route is supposed to be visited by redirection and redirects again to the main page, so no POST REQUESTS
        if(response){
            CookieService.deleteCookie(response);
            response.writeHead(HttpStatus.REDIRECT, { Location: "/logout" });
            response.end();
        }else
            Router.push("/");

    }
}

export default new LogoutHandler().handleRequest;
