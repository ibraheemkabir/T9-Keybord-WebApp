import {ApiRequest} from './types'

export class ApiClient {

    constructor(private baseUrl: string){
        this.baseUrl = baseUrl
    }

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    async post(req: ApiRequest): Promise<any> {
        try {
            const res = await fetch(`${this.baseUrl}/${req.url}`, {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(req.body),
                    headers: this.headers
            });
            const response = await res.json()
            return response
        }catch(e){
            throw(e);
        }
    }

    async fetch(req: ApiRequest): Promise<any> {        
        try {
            const res = await fetch(`${this.baseUrl}/${req.url}`, {
                    method: req.method,
                    mode: 'cors',
                    headers: this.headers
            });
            const response = await res.json()
            return response
        }catch(e){
            throw(e);
        }
    }
}