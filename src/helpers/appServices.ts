import { Response } from "express";
import { ZodError } from "zod";

import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export function httpResponse(
  res: Response,
  status: boolean,
  httpCode: number,
  data?: any,
  message?: string | any
) {
  return res.status(httpCode).json({
    status: status,
    message: message === null ? null : message,
    data: data === null ? null : data,
  });
}


export function errorResponse(error: any, res: Response) {
  if (error instanceof ZodError) {
    return httpResponse(
      res,
      false,
      422,
      null,
      error.issues[0].message
    );
  }

  if (error instanceof Error) {
    return httpResponse(res, false, 422, null, error.message);
  }

  return httpResponse(res, false, 500, null, "Internal server error");
}
export async function hash(password: string) {
  const saltRounds = 12; 
  return bcrypt.hash(password, saltRounds);
}

export  async function compareHash(plainTextPassword: string, hashedPassword: string){
   return  bcrypt.compare(plainTextPassword, hashedPassword);
}

interface TokenPayload {
  id: number;
  username: string;
}
export  async function generateToken(data: TokenPayload) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  const token = jwt.sign(data, process.env.JWT_SECRET , {
    expiresIn: "1h",
  });
  return token;
}

export  async function extractToken(token: string) {

  const secretKey = process.env.JWT_SECRET as string;

  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return errorResponse(new Error("Invalid or expired token"), null as any);
  }
}