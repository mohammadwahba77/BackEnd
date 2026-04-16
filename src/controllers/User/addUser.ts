import { Request, Response } from "express";
import { errorResponse, httpResponse } from "../../helpers/appServices";
import * as userService from "../../userService";

const addUser = async (req: Request, res: Response) => {
    try {
        const newUser = userService.addUserService(req.body);
        return httpResponse(res, true, 201, newUser, "The user has been created successfully");
    } catch (error) {
        console.error("Error in addUser:", error);
        errorResponse(error, res);
    }
};
export default addUser;
