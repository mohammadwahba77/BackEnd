import { Express  } from "express";
import { userCrud } from "./user/userRoutes";



export const usersRoutes = (app:Express)=>{
    const prefix = "/api/user" ; 
    app.use(`${prefix}` , userCrud);
   
}



