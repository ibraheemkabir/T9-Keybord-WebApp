import React from 'react';

interface SuggestionProps {
    combinations:string[],
    words:string[]
}

export const Suggestions = (props:SuggestionProps) => {
    return (
        <div className="main_sugestions_container">
            {
                props.combinations.length>0 && 
                <>
                    <div className="header">
                        Combinations 
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
                        Word Suggestions 
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
        </div>
    )
}