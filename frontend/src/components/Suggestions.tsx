import React from 'react';

interface SuggestionProps {
    combinations:string[],
    words:string[],
    combinationSpecified: string,
}

export const Suggestions = (props:SuggestionProps) => {
    return (
        props.combinationSpecified ?
        <div className="main_sugestions_container">
            {
                props.combinations.length>0 && 
                <>
                    <div className="header">
                        Possible Combinations for {props.combinationSpecified}
                    </div>
                    <div className="suggestions_container">
                            {
                                props.combinations.map(e =>
                                    <span className="suggestion">{e}</span>
                                )
                            }
                    </div>
                </>
            }
            {
                props.words.length>0 && 
                <> 
                    <div className="header">
                        Word Suggestions for {props.combinationSpecified}
                    </div>
                    <div className="suggestions_container">
                            {
                                props.words.map(e =>
                                    <span className="suggestion">{e}</span>
                                )
                            }
                    </div>
                </>
            }
        </div> : <></>
    )
}