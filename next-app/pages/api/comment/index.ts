import {NextApiRequest, NextApiResponse} from "next";
import {RequestHandler} from "@/utils/HTTPHandler/HTTPHandler";
import { TrailsService } from "@/services/trails/trails.service";
import { Trail } from "@/models/server/trail/trail";
import { ITrail } from "@/models/shared/trail/trail.interface";
import { UserService } from "@/services/users/service";
import { AuthService } from "@/services/auth/service";
import { CookieService } from "@/services/cookies/service";
import { HttpStatus, sendCustomError } from "@/utils/HTTPError/HTTPErrorUtils";
import { CommentFormFields } from "@/components/presenter/add-comment/add-comment.presenter";
import { IComment } from "@/models/shared/comment/comment.interface";
import { CommentsService } from "@/services/comments/comments.service";
import { IUser } from "@/models/shared/user/user.interface";

class CommentHandler extends RequestHandler {
    constructor() {
        super(); // Call the constructor of the parent class
    }

    public async getUser( response: NextApiResponse): Promise<IUser | null> {

            const commenterCookie= await AuthService.getUserInfoFromToken(CookieService.getCookie());
            return(commenterCookie)
        }
    };


export default new CommentHandler().getUser;
