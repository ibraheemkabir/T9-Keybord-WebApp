import { numbersMap,wordArray } from '../../util/utils';

export class conversionHandler {

    private getCombinations (params: string[][], prefix?:string ): string[]|string {
        prefix = prefix || ''
        if(!params.length){
            return prefix;
        }
        let result = params[0];
        result = result.reduce((results,value)=>results.concat(this.getCombinations(params.slice(1),prefix+value)),[])
        return result
    }

    private getLetters( word : string ) {
        const letters = word.toString().split('');
        let arrayOfLetterEquivalents = [];
        for(let i of letters){
            const map = numbersMap[i] || [i];
            arrayOfLetterEquivalents.push(map)
        }
        return arrayOfLetterEquivalents;
    }

    private getPossibleWords(combinations: string[]|string) {
        let words:string[] = [];
        if(combinations.length){
            for(let i of combinations){
                const matchingWords = wordArray.filter(e => e.includes(i));
                if(matchingWords.length){
                    words = words.concat(matchingWords)
                }
            }
        }
        return [...new Set(words)]
    }

    public getPredictions ( word : string ) {
        const arrayOfWordLetters = this.getLetters(word);
        const combinations = this.getCombinations(arrayOfWordLetters);
        const possibleWords = this.getPossibleWords(combinations)
        return { combinations , possibleWords: possibleWords.slice(0, 30) };
    }

}