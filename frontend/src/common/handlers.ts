import {ApiClient} from './api';
import { Dispatch } from 'redux';
export const BASE_URL = 'http://localhost:5000/v1';

export const fetchSuggestions = async (
        url:string,populateSuggestions: (suggestion:string[]) => void, 
        dispatch:Dispatch,body:any,
        method="POST"
    ) => {
    try{
        const api =  new ApiClient(BASE_URL);
        const response = await api.post ({
            url: `${url}`, 
            body,
            method
        })
        if(response?.data!){
            populateSuggestions({...response.data});
        }
        return response
    }catch(e){
        console.log('error occured processing fetch data',e)
        dispatch({type: 'ERROR_OCCURED_PROCESSING',payload: {error: e}})
    }finally{
    }

}