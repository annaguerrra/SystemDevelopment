import express, {Request, response, Response, Router} from 'express';

interface User{
    id: number,
    name: string,
    email: string,
    role: "Student" | "Teacher" | "Coordinator",
    active: boolean,
    createdAt: Date
}

const router: Router = express.Router();
const users: User[] = [];

router
    .post('/users', (req: Request, res: Response) => {
        const { id, name, email, role } = req.body
        
        if(!email && !name){
            res.status(400).send({ response: "Please, fill in all required fields." })
        }
        if( users.find(user => user.id == id) || users.find(user => user.email == email)){
            res.status(400).send({ response: "This email is already in use" })      
        }

        users.push({
            id,
            name,
            email,
            role,
            active: true,
            createdAt: new Date()})

        res.status(200).send({message:`Welcome, ${name}! Successfully registered.`})
    })
    .get('/users', ( req: Request, res: Response ) => {
        const { role } = req.query

        if(!role){
            res.status(200).send({ users: users })
        }
        const userFound = users.find( user => user.role == role)

        res.status(200).send({ response: userFound })
    })
    .get('users/:id', ( req: Request, res: Response ) => {
        const { id } = req.query
        
        let convertedId = Number(id)
        const userFound = users.find(user => user.id == convertedId)
        if(!userFound){
            res.status(404).send({ response:  "User Not Found :("})
        }
        res.status(200).send({ response:  userFound})
    })
     .patch(' users/:id', ( req: Request, res: Response) => {
        const { id } = req.params
        const { campos } = req.body

        res.send(`User id ${id} was updated. Name: ${}`)
    })
