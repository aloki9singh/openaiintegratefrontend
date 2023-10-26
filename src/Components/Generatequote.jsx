import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/generatequote.css'

function Generatequote() {
  const [keyword, setKeyword] = useState('');
  const [quotes, setQuotes] = useState({ quoteEn: '', quoteHi: '' });

  const generateQuotes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api1/quote?keyword=${keyword}`);
      setQuotes(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={generateQuotes}>Generate Quotes</button>
      </div>
      <div>
        <p>English Quote: {quotes.quoteEn}</p>
        <p>Hindi Quote: {quotes.quoteHi}</p>
      </div>
    </div>
  );
}

export default Generatequote;
