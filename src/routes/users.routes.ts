import { Router } from "express";

import createUserController from "../controllers/usersControllers/createUser.controller";
import deleteUserController from "../controllers/usersControllers/deleteUser.controller";
import listUsersController from "../controllers/usersControllers/listUsers.controller";
import userLoginController from "../controllers/usersControllers/userLogin.controller";
import updateUserController from "../controllers/usersControllers/updateUser.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserExistenceByIdMiddleware from "../middlewares/verifyUserExistenceById.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.get("", listUsersController);
router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.put(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyUserExistenceByIdMiddleware,
  updateUserController
);
router.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyUserExistenceByIdMiddleware,
  deleteUserController
);
router.post("/login", userLoginController);

export default router;
