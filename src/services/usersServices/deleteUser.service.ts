import users from "../../database/users";

const deleteUserService = (index: number) => {
  users.splice(index, 1);

  return "User deleted";
};

export default deleteUserService;
