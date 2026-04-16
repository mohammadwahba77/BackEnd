import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../helpers/appServices";


export const addUserSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  username: z.string().min(3, "Username is required"),
  email: z.string().email("Invalid email format"),
}).strict();
const validateAddUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    addUserSchema.parse(req.body);
    next();
  } catch (error) {
    console.error("Validation error in addUser:", error);
    errorResponse(error, res);
  }
};

export const deleteUserSchema = z.object({
  id: z.number().int().positive("ID must be a positive integer"),
}).strict();

const validateDeleteUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    deleteUserSchema.parse({
  id: Number(req.params.id)
});
    next();
  } catch (error) {
    console.error("Validation error in deleteUser:", error);
    errorResponse(error, res);
  }
};

export const updateUserSchema = z.object({
  id: z.number().int().positive("ID must be a positive integer"),
  name: z.string().min(2, "Name is too short").optional(),
  username: z.string().min(3, "Username is required").optional(),
  email: z.string().email("Invalid email format").optional(),
}).strict();
const validateUpdateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    updateUserSchema.parse({
      id: Number(req.query.id),
      ...req.body
    }); 
    next();
  } catch (error) {   
    console.error("Validation error in updateUser:", error);
    errorResponse(error, res);
  } 
};

const validateGetUserById = (req: Request, res: Response, next: NextFunction) => {
  try {
    deleteUserSchema.parse({
  id: Number(req.query.id)
});
    next();
  } catch (error) {
    console.error("Validation error in deleteUser:", error);
    errorResponse(error, res);
  }
};
export { validateAddUser, validateDeleteUser, validateUpdateUser , validateGetUserById }; 