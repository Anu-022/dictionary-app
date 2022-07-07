import React from "react";
import Meaning from "./Meaning";
import './Results.css'
export default function Results(props) {
    if (props.result) {
        return (
            <div className= "Results">
                <h2>{props.result.word}</h2>
                { props.result.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning ={meaning} />
                        </div>
                    );
                }) 
            }
            </div>
        );
    } else { 
        return null;
    }   
}