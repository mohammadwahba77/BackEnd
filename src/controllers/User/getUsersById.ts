import { Request, Response } from "express";
import { errorResponse, httpResponse } from "../../helpers/appServices";
import * as userService from "../../userService";

const getUserById = async (req: Request, res: Response) => {
    try {
        const user = userService.getUserByIdService(Number(req.query.id));
        if (!user) {
            return httpResponse(res, false, 404, null, "User not found");
        }
        return httpResponse(res, true, 200, user, "User fetched successfully");
    } catch (error) {
        errorResponse(error, res);
    }
};
export default  getUserById;
