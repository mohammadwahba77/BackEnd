import { Request, Response } from "express";
import { errorResponse, httpResponse } from "../../helpers/appServices";
import * as userService from "../../userService";

const updateUserById = async (req: Request, res: Response) => {
    try {
                const userId = req.query.id;
            const updateUserById = userService.updateUserService(Number(userId), req.body);
    
        return httpResponse(res, true, 200, updateUserById, "The user has been updated successfully");
    } catch (error) {
        errorResponse(error, res);
    }
};
export default updateUserById;
