import React, {useState} from 'react';
import axios from 'axios';
import'./Dictionary.css';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [result, setResult] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    
    function handleDictionResponse(response) {
        console.log(response.data[0]);
        setResult(response.data[0]);
    }
     function handlePexelResponse(response) {
      console.log(response);
      setPhotos(response.data.photos);
     }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        let pexelApiKey = "563492ad6f917000010000017ad0d4f0f5e641dd86e6280b66323b76";
        let pexelUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelApiKey}` };

        axios.get(pexelUrl, { headers: headers }).then(handlePexelResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();

        
    }
    function handleKeywordChange(event){
       setKeyword(event.target.value);
       
    }

    function load() {
    setLoaded(true);
    search();
}
    if (loaded) {
        return(
            <div className='Dictionary'>
                <section className='input-section'>
                    <h3>What word would you like to look up?</h3>
                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <input type="search" placeholder ="Search for a word"onChange={handleKeywordChange}/>
                        </form>
                        <small>Suggested words: Dawn, sunset, wine</small>
                    </div>
                </section>
                <Results  result= {result}/>
                <Photos photos ={photos} />
                <div className='footer text-center'>Coded by Anuoluwapo Olusanya</div>                
                </div>               
        );

    } else {
        load();
        return "Loading";
    }

    
}