import { Request, Response } from "express";
import { errorResponse, httpResponse } from "../../helpers/appServices";
import * as userService from "../../userService";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = userService.getAllUsersService();
        return httpResponse(res, true, 200, users, "Users fetched successfully");
    } catch (error) {
        errorResponse(error, res);
    }
};
export default getAllUsers;
