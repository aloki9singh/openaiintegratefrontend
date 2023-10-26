import React, { useState } from "react";
import axios from "axios";
import "../CSS/CodeConverter.css"; // Import the CSS

function CodeConverter() {
  const [sourceLanguage, setSourceLanguage] = useState("python");
  const [targetLanguage, setTargetLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const [error, setError] = useState(null);

  const handleConvertCode = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api1/convert-code`,
        {
          code,
          sourceLanguage,
          targetLanguage,
        }
      );
      setConvertedCode(response.data.convertedCode);
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="code-converter-container">
      <h2>Code Converter</h2>
      <div className="form-group">
        <select
          className="select"
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
        >  <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        
          {/* Add more source language options */}
        </select>
        <select
          className="select"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        > <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
         
          {/* Add more target language options */}
        </select>
      </div>
      <div>
        <textarea
          className="textarea"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code to convert"
        />
      </div>
      <div>
        <button className="button" onClick={handleConvertCode}>
          Convert Code
        </button>
      </div>
      <div className="result">
        <h3>Converted Code:</h3>
        <pre>{convertedCode}</pre>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default CodeConverter;
