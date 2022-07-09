import React from "react";

export default function Synonyms (props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                
                {props.synonyms.map (function (synonym, index) {
                    return <div>
                        <ul key={index}>
                            <li>{synonym}</li>
                        </ul>
                    </div>
                })}
            </div>
        );
    } else{
        return null;
    } 

}