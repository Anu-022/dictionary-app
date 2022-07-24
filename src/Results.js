import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import './Results.css';

export default function Results(props) {
    if (props.result) {
        return (
            <div className= "Results">
                <section className="results-header">
                    <h2>{props.result.word}</h2>
                    {props.result.phonetics.map(function(phonetic, index) {
                        return (
                            <div className ="phonetic" key={index}>
                                <Phonetics phonetic = {phonetic} />
                            </div>
                        )
                      })
                    }
                </section>
                    { props.result.meanings.map(function (meaning, index) {
                        return (
                            <section key={index}>
                               <Meaning meaning={meaning} />
                            </section>
                        );
                       }) 
                    }
            </div>
        );
    }    else { 
        return null;
    }  

}