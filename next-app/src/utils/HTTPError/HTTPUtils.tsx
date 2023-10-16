import {NextApiResponse} from "next";

export enum HttpStatus {
    OK = 200,
    REDIRECT = 302,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    INTERNAL_SERVER_ERROR = 500,
}

export function sendOkResponse(res: NextApiResponse, message: string): void {
    res.status(HttpStatus.OK).json({message: message});
}

export function sendOkObject(res: NextApiResponse, object: Object): void {
    res.status(HttpStatus.OK).json(object);
}

export function sendError(res: NextApiResponse, status: HttpStatus): void {
    res.status(status).json({error: getStatusMessage(status)});
}

export function sendCustomError(res: NextApiResponse, status: HttpStatus, customError: string): void {
    res.status(status).json({error: customError});
}

export function methodNotAllowed(res: NextApiResponse): void {
    sendError(res, HttpStatus.METHOD_NOT_ALLOWED);
}

// Define messages for each status code
const statusMessages: Record<HttpStatus, string> = {
    [HttpStatus.OK]: "OK",
    [HttpStatus.REDIRECT]: "Redirect",
    [HttpStatus.BAD_REQUEST]: "Bad Request",
    [HttpStatus.UNAUTHORIZED]: "Unauthorized",
    [HttpStatus.FORBIDDEN]: "Forbidden",
    [HttpStatus.NOT_FOUND]: "Not Found",
    [HttpStatus.METHOD_NOT_ALLOWED]: "Method Not Allowed",
    [HttpStatus.INTERNAL_SERVER_ERROR]: "Internal Server Error",
};

export function getStatusMessage(status: HttpStatus): string {
    return statusMessages[status];
}
