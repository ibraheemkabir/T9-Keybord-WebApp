import {server} from '../app';
import superTest from 'supertest';

describe('tes app requests',()=>{

    it('test failed endpoints',async ()=>{
        const superTestRequest = superTest(server);
        const res = await superTestRequest.get('/');
        expect(res.body.status).toEqual('Failed')
        expect(res.body.message).toEqual('Route Not found, kindly refer to Api documentation')
    })

    it('test home endpoint',async ()=>{
        const superTestRequest = superTest(server);
        const res = await superTestRequest.post('/');
        expect(res.status).toEqual(200);
        expect(res.body.message).toEqual('hello, Welcome to the word converter Api')
    })

    it('test convert endpoint with missing param data',async ()=>{
        const superTestRequest = superTest(server);
        const res = await superTestRequest.post('/v1/convert');
        expect(res.status).toEqual(400);
    })

    it('test convert endpoint with missing param data',async ()=>{
        const superTestRequest = superTest(server);
        const res = await superTestRequest.post('/v1/convert').send({word: 'ac'});
        expect(res.status).toEqual(200);
    })
    
})
