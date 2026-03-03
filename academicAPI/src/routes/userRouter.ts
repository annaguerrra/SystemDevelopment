import express, {Request, response, Response, Router} from 'express';
import UserController from '../controller/userController.js';

const router: Router = express.Router();

router.get("/users", UserController.getUser);
router.post("/users", UserController.createUser);

export default router;
