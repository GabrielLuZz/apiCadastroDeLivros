import users from "../../database/users";
import { v4 as uuidV4 } from "uuid";
import * as bcrypt from "bcrypt";

const createUserService = async (
  name: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    id: uuidV4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
