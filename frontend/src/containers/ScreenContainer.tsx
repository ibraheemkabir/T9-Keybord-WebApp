import * as React from 'react';
import { useDispatch } from 'react-redux';
import {InputActions} from '../redux/slices/inputSlice';
import {Screen} from './../components/Screen';

export const ScreenContainer = (props: {input:string,suggestions:string[]}) => {
    const dispatch = useDispatch();

    const handleSuggestionSelect = (e:string) => {
        const inputs = (props.input).split(' ');
        inputs[inputs.length-1] = e
        dispatch(InputActions.addSelection({value:inputs.join(' ')}))
    }

    return (
        <Screen 
            content={props.input} 
            suggestion={props.suggestions} 
            onSelectWord={handleSuggestionSelect}
        />
    )
}

