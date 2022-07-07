import React, {useState} from 'react';
import axios from 'axios';
import'./Dictionary.css';
import Results from './Results';

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState(null);
    
    function handleResponse(response) {
        console.log(response.data[0]);
        setResult(response.data[0]);
    }
    function search(event) {
        event.preventDefault();
        //alert(`Searching for ${keyword} definition`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event){
       setKeyword(event.target.value);
    }

    return(
        <div className='Dictionary'>
            <div className='form'>
                <form onSubmit={search}>
                    <input type="search" onChange={handleKeywordChange}/>
                    <button type="submit">Search</button>
                </form>
            </div>
            <Results  result= {result}/>
            <div className='footer text-center'>Coded by Anuoluwapo Olusanya</div>                
            </div>
            
            
    )
}