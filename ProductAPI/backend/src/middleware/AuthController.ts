import { Request, Response, NextFunction } from "express";

export const validateObjectId = ( req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body

    if(!id)
        return res.status(400).json({ error: "User Not Found" })
    next();
}