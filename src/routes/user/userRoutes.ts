import express from "express";
import addUser from "../../controllers/User/addUser";
import getUser from "../../controllers/User/getAllUsers";
import deleteUser from "../../controllers/User/deleteUser";
import updateUser from "../../controllers/User/updateUserById";
import {  validateAddUser, validateDeleteUser, validateGetUserById, validateUpdateUser } from "../../validations/userValidator";
import { get } from "node:http";
import { getUserByIdService } from "../../userService";
import getUsersById from "../../controllers/User/getUsersById";
import getUserById from "../../controllers/User/getUsersById";

export const userCrud = express.Router();    
userCrud.post("/add",validateAddUser, addUser);
userCrud.get("/get",  getUser); 
userCrud.delete("/delete/:id",validateDeleteUser, deleteUser);
userCrud.put("/update", validateUpdateUser, updateUser);
userCrud.get("/getById", validateGetUserById, getUserById);


