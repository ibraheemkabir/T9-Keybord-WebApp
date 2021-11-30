import { Request, Response,NextFunction } from 'express';

export function inputValidatorMiddleWare (req:Request, res:Response, next:NextFunction) {
    const { word } = req.body;
    console.log('LOGGED WORD', word )
    if(!word) {
        return res.status(400).json({
            status: 400,
            result: `word parameter is required!`
        });
    } 
    next()
}