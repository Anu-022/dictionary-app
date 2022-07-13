import React from "react";
import "./phonetics.css";

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
            <span><a href= {props.phonetic.audio}>Listen</a></span>
            <span>{props.phonetic.text}</span>
        </div>
    )
}