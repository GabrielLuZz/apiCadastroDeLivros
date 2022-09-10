import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json("Missing Authorization Token");
  }

  if (token.toLowerCase().includes("bearer")) {
    token = token.split(" ")[1];
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json("Invalid Token");
    }

    next();
  });
};

export default verifyAuthTokenMiddleware;
