import express, {Request, response, Response, Router} from 'express';
import User from '../models/User.js';
import UserController from '../controller/userController.js';

const router: Router = express.Router();

router.get("/users", UserController.getUser);
router.post("/users", UserController.createUser);
router.get('/users/:id', UserController.getUserById);

export default router;


router
     .patch(' users/:id', async ( req: Request, res: Response) => {
        const { id } = req.params
        const { campos } = req.body

        res.send(`User id ${id} was updated. Name: ${}`)
    })
