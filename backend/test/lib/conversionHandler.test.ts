import {conversionHandler} from "./../../src/services/lib/conversionHandler";

describe('word conversion handler function',()=>{

    it('test get possible Combinations',async ()=>{
        const conversionHandlerInstance = new conversionHandler()
        const param = '23'
        const res = await conversionHandlerInstance.getPredictions(param)
        expect(res.combinations.toString()).toBe(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'].toString())
    })

    it('test get possible words to suggest some words',async ()=>{
        const conversionHandlerInstance = new conversionHandler()
        const res = await conversionHandlerInstance.getPredictions('ca')
        expect(res.possibleWords.length).toBeGreaterThan(0)
    })
    
})
