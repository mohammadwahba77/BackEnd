import { Request, Response } from "express";
import { errorResponse, httpResponse } from "../../helpers/appServices";
import { loginService  } from "../../userService";



const logInUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return errorResponse(new Error("Username and password are required"), res);
    }   
    const token =  await loginService(username, password);
    if (token) {
        return httpResponse(res, true, 200, { token }, "Login successful");
    } else {
        return errorResponse(new Error("Invalid credentials"), res  );
    }
};
export default logInUser;