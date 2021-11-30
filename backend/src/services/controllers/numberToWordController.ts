import { Request, Response } from 'express';
import {conversionHandler} from './../lib/convertHandler';

class numberToWord {

    constructor(){}

    public convert (req:Request, res:Response) {
        const wordRequest = req.body.word;
        const handleWordConversionInstance  = new conversionHandler();
        const response = handleWordConversionInstance.getPredictions(wordRequest)
        res.status(200).json({
            status: 200,
            data: response
        })
    }

}

export const numberToWordController = new numberToWord()