import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning)
    return (
        <div className="Meaning"> 
            <h3>{props.meaning.partOfSpeech}</h3>
            <section>
                {props.meaning.definitions.map(function (definition, index) {
                   return (
                        <div key={index}>
                            <p>
                                <strong>Definition:</strong>{" "}{definition.definition}
                                <br />
                                <strong>Example:</strong>
                                <em>{" "}{definition.example}</em>
                            </p>
                            <Synonyms synonyms ={definition.synonyms} />
                        </div>
                    )
               })}
                <p>{props.meaning.example}</p>
            </section>
        </div>
    )
}