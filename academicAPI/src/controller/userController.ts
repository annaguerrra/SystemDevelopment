import { Request, Response } from "express";
import User from "../models/User.js";

class UserController {
    static getUser( req: Request, res: Response ){
        res.json( [ 
            { id: 1, name:  "Anna" }, 
            { id: 2, name: "Lasnine" },
            { id: 3, name: "Letícia" } ] );
    }

    static createUser( req: Request, res: Response){
        const { name } = req.body;
        res.status(201).json( { message: `You're Welcome, ${name}!`});
    }

    static async registerUser( req: Request, res: Response){
        const { name, email, role } = req.body
                
        const user = new User({ name, email, role })
        await user.save();

        res.status(200).send({message:`Welcome, ${name}! Successfully registered.`})
    }

    static async getUserByRole( req: Request, res: Response){
        const { role } = req.query
        const userFound = await User.findOne({ role: role })

        if(!userFound)
            res.status(404).send({ response: "User Not Found"});

        res.status(200).send({ response: userFound });
    }

    static async getUserById( req: Request, res: Response){
        const { id } = req.query
        
        let convertedId = Number(id)
        const userFound =  await User.findOne({ id: convertedId})

        if(!userFound)
            res.status(404).send({ response:  "User Not Found :("})
        
        res.status(200).send({ response:  userFound})
    }
}

export default UserController;