import type { NextFunction, Request, Response } from "express";
import { ResponseMessages } from "../constants";
import logger from "../utils/logger.utils";

interface IErrorHandler {
  status: number;
  message: string;
  field?: string;
  validationError: any;
  devMessage: string;
}

const errorHandler = (error: IErrorHandler) => {
  const { status = 500, message, field, validationError, devMessage } = error;

  const resMsg = ResponseMessages[status];
  const errorObj = {
    status,
    message: resMsg,
    error: {
      message,
      field,
    },
    devMessage,
    validationError,
  };

  if (!errorObj.validationError) delete errorObj.validationError;
  return errorObj;
};

//Always have 4 parameters otherwise error handler wont work.
const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.error("error: ", err);
    const error = errorHandler(err);
    res.status(error.status ?? 500).send(error);
  } catch (e) {
    logger.error(err);
  }
};

export default errorHandlerMiddleware;
