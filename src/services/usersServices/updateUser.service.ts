import users from "../../database/users";
import User from "../../@types/user.type";
import * as bcrypt from "bcrypt";

const updateUserService = async (newUser: User, index: number) => {
  newUser.password = await bcrypt.hash(newUser.password, 10);
  users[index] = { ...users[index], ...newUser };

  return users[index];
};

export default updateUserService;
