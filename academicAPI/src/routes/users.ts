import express, {Request, response, Response, Router} from 'express';
import User from './models/User.js';

const router: Router = express.Router();

router
    .post('/register',  async (req: Request, res: Response) => {
        const { name, email, role } = req.body
        
        const user = new User({ name, email, role })
        await user.save();

        res.status(200).send({message:`Welcome, ${name}! Successfully registered.`})
    })
    .get('/users', async ( req: Request, res: Response ) => {
        const { role } = req.query

        if(!role){
            const user = await User.find()
            res.status(200).send({ response: user})
        }
        const userFound = await User.findOne({ role: role })

        res.status(200).send({ response: userFound })
    })
    .get('users/:id', async ( req: Request, res: Response ) => {
        const { id } = req.query
        
        let convertedId = Number(id)
        const userFound =  await User.findOne({ id: convertedId})

        if(!userFound){
            res.status(404).send({ response:  "User Not Found :("})
        }
        res.status(200).send({ response:  userFound})
    })
     .patch(' users/:id', async ( req: Request, res: Response) => {
        const { id } = req.params
        const { campos } = req.body

        res.send(`User id ${id} was updated. Name: ${}`)
    })
