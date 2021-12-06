import {inputValidatorMiddleWare} from '../../src/services/middlewares/inputValidator';
import { NextFunction,Request,Response} from 'express';

describe('test validator functions',()=>{
    let mockRequest: Partial<Request>
    let mockResponse: Partial<Response>
    let NextFunction: Partial<NextFunction>= jest.fn()

    beforeEach(()=>{
        mockRequest = {}
        mockResponse = {
            json: (v)=>v,
            status : function(s){
                this.statusCode = s;
                return this
            }
        }
    })

    it('test missing word parameter',async ()=>{
        mockRequest = {
            body:{}
        }
        const validatorRes = await inputValidatorMiddleWare(mockRequest as Request,mockResponse as Response,NextFunction as NextFunction)
        expect(validatorRes.status).toEqual(400)
    })

    it('test word parameter passes validation',async ()=>{
        mockRequest = {
            body:{
                word: 'ac'
            }
        }
        await inputValidatorMiddleWare(mockRequest as Request,mockResponse as Response,NextFunction as NextFunction)
        expect(NextFunction).toHaveBeenCalledTimes(1)
    })

})
