import React from 'react';

interface ScreenProps {
    content:string,
    suggestion: string[], 
    onSelectWord: (v:string)=> void
}

export const Screen = (props:ScreenProps) => {
    return (
        <div className="screen_container">
            <div className="inner_screen">
                {props.content} 
            </div>
            {
                (props.suggestion.length>0 && props.content) && 
                    <div className="suggestions_container">
                            {
                                props.suggestion.map(e =>
                                    <span onClick={()=>props.onSelectWord(e)} className="suggestion">{e}</span>
                                )
                            }
                    </div>
            }        
        </div>
    )
}