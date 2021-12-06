import {numberToWordController} from "./../../src/services/controllers/ToWordController";
import { NextFunction,Request,Response} from 'express';

describe('test toWord controller',()=>{
    let mockRequest: Partial<Request>
    let mockResponse: Partial<Response>

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

    it('test convert Controller',async ()=>{
        mockRequest = {
            body:{
                word: 'ac'
            }
        }
        const response = await numberToWordController.convert(mockRequest as Request,mockResponse as Response)
        expect(response.status).toEqual(200)
    })
    
})
