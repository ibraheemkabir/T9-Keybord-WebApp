export interface AppState{
    inputView: inputView
}

export interface inputView{
    input: string,
    suggestions: string[],
    wordSuggestions?: string[],
    combinations?: string[]
}

export interface ApiRequest {
    url:string,
    method:string,
    body: {}
} 
