import express from "express";
import addUser from "../../controllers/User/addUser";
import getUser from "../../controllers/User/getAllUsers";
import deleteUser from "../../controllers/User/deleteUser";
import updateUser from "../../controllers/User/updateUserById";
import {  validateAddUser, validateDeleteUser, validateGetUserById, validateUpdateUser } from "../../validations/userValidator";

import getUserById from "../../controllers/User/getUsersById";
import logInUser from "../../controllers/User/logInUser";
import { authenticated } from "../../middlewares/Authentication";

export const userCrud = express.Router();    
userCrud.post("/add",validateAddUser, addUser);
userCrud.get("/get",authenticated,  getUser); 
userCrud.delete("/delete/:id",validateDeleteUser, deleteUser);
userCrud.put("/update",authenticated, validateUpdateUser, updateUser);
userCrud.get("/getById", authenticated, validateGetUserById, getUserById);
userCrud.post("/login", logInUser ) ;


