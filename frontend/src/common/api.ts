import {ApiRequest} from './types'
import * as CacheHandler from './../utils/cacheHandler';
export class ApiClient {

    constructor(private baseUrl: string){
        this.baseUrl = baseUrl
    }

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    async post(req: ApiRequest): Promise<any> {
        const isInCache = CacheHandler.isValid(req.body.word)
        console.log(isInCache,'isInCACHE')
        if(isInCache.isValid) return JSON.parse(isInCache.value as string);
        try {
            const res = await fetch(`${this.baseUrl}/${req.url}`, {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(req.body),
                    headers: this.headers
            });
            const response = await res.json()
            CacheHandler.store(req.body.word,JSON.stringify(response))
            return response
        }catch(e){
            throw(e);
        }
    }
}