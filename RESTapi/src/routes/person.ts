import express, {Request, response, Response, Router} from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/register', (req: Request, res: Response) => {
        const { name, lastname } = req.body
        console.log(name, lastname);
        people.push({name, lastname})
        res.status(200).send({message:`Welcome, ${name} ${lastname}! Successfully registered.`})
    })
    .get('/users', (req: Request, res: Response) => {
        res.status(200).send({users: people})
    })
    .get('/users/:id', (req: Request, res: Response) => {
        const { id } = req.params

        let convertedId = Number(id)
        res.status(200).send({ response: people[convertedId] })
    })
    .get('/filter', (req: Request, res: Response) => {
        const {name, lastname } = req.query
        res.status(200).send({ response: name, lastname })
    })
    .put('update/:id', (req: Request, res:Response) => {
        const { id } = req.params
        const { name, lastname } = req.body
        res.status(200).send(`Updating User ${id} ${name} ${lastname}`)
    })
    .patch('atualizar/:id', ( req: Request, res: Response) => {
        const { id } = req.params
        const { name } = req.body

        res.send(`User id ${id} was updated. Name: ${name}`)
    })
    .delete('delete/:id', ( req: Request, res: Response) => {
        const { id } = req.params
        
        res.send(`User id ${id} was successfully deleted.`)
    })
export default router;