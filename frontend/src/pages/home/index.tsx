import React from 'react';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import {keyLayout} from './../../utils/keys';
import {InputActions} from '../../redux/slices/inputSlice';
import { useDispatch, useSelector } from 'react-redux';
import {AppState,inputView} from './../../common/types';
import {fetchSuggestions} from './../../common/handlers';
import {Suggestions} from './../../components/Suggestions';
import {ScreenContainer} from './../../containers/ScreenContainer';

export function Home(){
    const dispatch = useDispatch();
    const {input,suggestions,combinations,wordSuggestions} = useSelector<AppState,inputView>(AppState=> AppState.inputView);

    const handleInputChanged = async (content:string) => {
        if(content.toString() === '{bksp}') {
            dispatch(InputActions.backSpace({value: ''})) 
            return
        }
        if(content.toString() === '{space}') {
            dispatch(InputActions.inputChanged({value: ' '}))
            return
        }
       
        const sliceContent = content.split('<br>')
        let number = sliceContent[0].replaceAll('<center>','')
        //let string = sliceContent[1].replaceAll('</center>','')
        //let letters = string.split('')
        if(number) await dispatch(InputActions.inputChanged({value: number}))
        const lastEntry = (input+number).split(' ');
        if (input){
            await fetchSuggestions(
                'convert',
                (suggestions:string[]) => dispatch(InputActions.populateSuggestions({value:suggestions})),
                dispatch,
                {word: lastEntry.at(-1)},
                'POST'
        )}  
    }

    return (
        <div>
            <div className="home_body">
                <ScreenContainer input={input} suggestions={suggestions}/>
                <Keyboard
                    handleButtonMouseUp={()=>console.log('uppppp')}
                    theme={"hg-theme-default hg-layout-numeric numeric-theme"}
                    layoutName={'default'}
                    onChange={(input:string) => {}}
                    onKeyPress={(button:string) => handleInputChanged(button)}
                    disableCaretPositioning={true}
                    layout={{
                        default: keyLayout,
                        shift: ["! / #", "$ % ^", "& * (", "{shift} ) +", "{bksp}"]
                    }}
                    display = {{
                        '{space}' : 'space',
                        '{//}' : ' ',
                        '{bksp}' : '< backspace'
                    }}
                    inputMask={"(99) 9999-9999"}
                    modules={[]}
                />
            </div>
                <Suggestions 
                    combinations={combinations||[]} 
                    words={wordSuggestions||[]}
                    combinationSpecified={(((input).split(' ').at(-1))||'').toString()}
                />
        </div>
    )
}