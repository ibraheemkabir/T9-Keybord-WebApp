import configureMockStore from 'redux-mock-store';
import * as Handlers from './../common/handlers';
import fetchMock from "jest-fetch-mock";

const createStore = configureMockStore([]);
fetchMock.enableMocks();

describe('Test for handler functions',()=>{

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('should test fecth suggestions methods',async ()=>{
        const store = createStore();
        const testSuggestions = [{"combinations": ["ca"],"possibleWords":["23","54"]}]
        const expectedActions = [
            { type: "inputSlice/populateSuggestions", payload: {value:testSuggestions} },
        ]
        const mockedResponse = { data: {combinations: [], possibleWords: [] }}
        fetchMock.mockResponse(JSON.stringify(mockedResponse));
        const loadSuggestions = (words:string[]) => store.dispatch({ type: 'inputSlice/populateSuggestions',payload:{value:testSuggestions}});
        await Handlers.fetchSuggestions(
            'convert',
            loadSuggestions,
            store.dispatch,
            {word: 'ac'}
        )
        expect(store.getActions()).toEqual(expectedActions)
    })
})