import { Request, Response, NextFunction } from 'express';

export const validateLogin = ( req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    if( !email || !password)
        return res.status(400).json({ error: "Please, fill in all the yields!"});
    next();

};

export const validateRegister = ( req: Request, res: Response, next: NextFunction) => {
    const { email, password, confirmPassword } = req.body

    if( !email || !password || !confirmPassword)
        return res.status(400).json({ error: "Please, fill in all the yields!"});
    
    if( password != confirmPassword)
        return res.status(400).json({ error: "The passwords doesn't match"});    
    next();

}
