import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import './Results.css';

export default function Results(props) {
    if (props.result) {
        return (
            <div className= "Results">
                <section>
                    <h2>{props.result.word}</h2>
                    {props.result.phonetics.map(function(phonetic, index) {
                        return (
                            <div key={index}>
                                <Phonetics phonetic = {phonetic} />
                            </div>
                        )
                      })
                    }
                    { props.result.meanings.map(function (meaning, index) {
                        return (
                            <div key={index}>
                               <Meaning meaning ={meaning} />
                            </div>
                        );
                       }) 
                    }
                </section>
            </div>
        );
    }    else { 
        return null;
    }  

}