import { Request, Response } from "express";

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
}

export default UserController;