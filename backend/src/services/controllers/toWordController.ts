import { Request, Response } from 'express';
import {conversionHandler} from '../lib/conversionHandler';

class numberToWord {

    public convert (req:Request, res:Response) {
        const wordRequest = req.body.word;
        const handleWordConversionInstance  = new conversionHandler();
        const response = handleWordConversionInstance.getPredictions(wordRequest)
        if(response.combinations){
            return res.status(200).json({
                status: 200,
                data: response
            })
        }
        return res.status(400).json({
            message: 'An Error occured processing, try again'
        })
       
    }

}

export const numberToWordController = new numberToWord()