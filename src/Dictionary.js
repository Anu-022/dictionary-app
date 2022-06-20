import React, {useState} from 'react';
import'./Dictionary.css';

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }
    function handleKeywordChange(event){
       setKeyword(event.target.value);
    }

    return(
        <div className='Dictionary'>
            <header className='Dictionary-header'>
                   <form onSubmit={search}>
                        <input type="search" onChange={handleKeywordChange}/>
                        <button type="submit">Search</button>
                   </form>  
            </header>
            
        </div>
    )
}