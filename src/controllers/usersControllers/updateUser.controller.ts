import { Request, Response } from "express";
import updateUserService from "../../services/usersServices/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const newUser = req.body;
  const index = req.index as number;
  const id = req.id;

  newUser.id = id;

  const user = await updateUserService(newUser, index);

  res.json(user);
};

export default updateUserController;
