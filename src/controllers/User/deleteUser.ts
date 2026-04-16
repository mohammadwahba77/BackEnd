import { Request, Response } from "express";
import { errorResponse, httpResponse } from "../../helpers/appServices";
import * as userService from "../../userService";


const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const isDeleted = userService.deleteUserService(Number(userId));
        if (!isDeleted) {
            return httpResponse(res, false, 404, null, "User not found");
        }   
        
        return httpResponse(res, true, 200, null, "The user has been deleted successfully");
    } catch (error) {
        errorResponse(error, res);
    }
};
export default deleteUser;
