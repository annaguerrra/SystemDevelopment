import express, {Request, Response, Router} from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/registrar', (req: Request, res: Response) => {
        const { name, lastname } = req.body
        console.log(name, lastname);
        res.status(200).send(`Nome: ${name} ${lastname}`)
    })

export default router;