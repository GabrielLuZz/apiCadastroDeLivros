import { Request, Response } from "express";
import createUserService from "../../services/usersServices/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const newUser = await createUserService(name, email, password);

  res.status(201).json(newUser);
};

export default createUserController;
