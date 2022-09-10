import { Request, Response } from "express";
import deleteUserService from "../../services/usersServices/deleteUser.service";

const deleteUserController = (req: Request, res: Response) => {
  const index = req.index as number;

  const result = deleteUserService(index);

  res.json(result);
};

export default deleteUserController;
