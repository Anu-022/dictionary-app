import React from "react";
import './Synonyms.css';

export default function Synonyms(props) {
    console.log(props.synonyms);
    if(props.synonyms) {
        return (
            <div className="Synonyms">
                {props.synonyms.map(function (synonym, index) {
                    return(  
                        <ul key={index}>
                            <li>{synonym}</li>
                        </ul>
                        ) 
                })}
            </div>
        );
     }
   

}