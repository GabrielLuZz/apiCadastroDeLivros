import { Request, Response } from "express";
import listUsersService from "../../services/usersServices/listUsers.service";

const listUsersController = (req: Request, res: Response) => {
  const users = listUsersService();

  res.json(users);
};

export default listUsersController;
