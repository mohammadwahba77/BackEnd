import { Request, Response } from "express";
import { errorResponse, hash, httpResponse } from "../../helpers/appServices";
import * as userService from "../../userService";

const addUser = async (req: Request, res: Response) => {
    try {
        const { name, email, age, username, password } = req.body;
        
        if (!name || !email || !age || !username || !password) {
            return errorResponse(new Error("All fields are required"), res);
        }   
        const hashedPassword = await hash(password);
        const newUser = await userService.addUserService({ ...req.body, password: hashedPassword });
        return httpResponse(res, true, 201, newUser, "The user has been created successfully");
    } catch (error) {
        errorResponse(error, res);
    }
};
export default addUser;
