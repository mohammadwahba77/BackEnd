import dotenv from "dotenv";
import { Response } from "express";
import { ZodError } from "zod";



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

// export function errorResponse(error: any, res: Response) {
//   if (error != null && error instanceof Error ) {
//     return httpResponse(res, false, 422, null, error.message);
//   }
//   return httpResponse(res, false, 500, null, "Internal server error");
// }
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

