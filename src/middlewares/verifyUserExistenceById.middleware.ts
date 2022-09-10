import { Request, Response, NextFunction } from "express";
import users from "../database/users";

const verifyUserExistenceByIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json("User not found");
  }

  req.index = index;
  req.id = id;
  next();
};

export default verifyUserExistenceByIdMiddleware;
