import { NextFunction, Request, Response } from "express";
import { extractToken, httpResponse } from "../helpers/appServices";

interface AuthenticatedRequest extends Request {
    user?: any;
}
export async function authenticated(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const authToken = req.headers.authorization;
        const token = authToken && authToken.split(" ")[1];

        if (!token) {
            return httpResponse(res, false, 401, null, "Unauthorized: No token provided");
        }

        const decodedUser = await extractToken(token);
        if (decodedUser) {
            req.user = decodedUser;
            return next();
        } else {
            return httpResponse(res, false, 401, null, "Unauthorized: Invalid or expired token");
        }
    } catch (error) {
        return httpResponse(res, false, 500, null, "Server Error in Authentication");
    }
}
