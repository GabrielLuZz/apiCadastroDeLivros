import { Router } from "express";

import createBookController from "../controllers/booksControllers/createBook.controller";
import deleteBookController from "../controllers/booksControllers/deleteBook.controller";
import listBooksController from "../controllers/booksControllers/listBooks.controller";
import updateBookController from "../controllers/booksControllers/updateBook.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyBookAlreadyExistsMiddleware from "../middlewares/verifyBookAlreadyExists.middleware";
import verifyBookExistenceByIdMiddleware from "../middlewares/verifyBookExistenceById.middleware";

const router = Router();

router.get("", verifyAuthTokenMiddleware, listBooksController);
router.post(
  "",
  verifyAuthTokenMiddleware,
  verifyBookAlreadyExistsMiddleware,
  createBookController
);
router.put(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyBookExistenceByIdMiddleware,
  updateBookController
);
router.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyBookExistenceByIdMiddleware,
  deleteBookController
);

export default router;
