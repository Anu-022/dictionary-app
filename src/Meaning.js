import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning)
    return (
        <div className="Meaning"> 
            <section className= "part-of-speech">
                <h3>{props.meaning.partOfSpeech}</h3>
                {props.meaning.definitions.map(function (definition, index) {
                    if (index < 5) {
                        return (
                            <div key={index}>
                                <p className="definition">
                                    {definition.definition}
                                    <br/>
                                    <Synonyms synonyms = {definition.synonyms} /> 
                                    <em>{definition.example}</em>
                                </p>    
                            </div>
                         );
                        } else {
                            return null;
                        }
                })}
            </section>
        </div>
    )
}