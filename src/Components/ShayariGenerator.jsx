import React, { useState } from "react";
import axios from "axios";
import "../CSS/shayari-generator.css"
export default function ShayariGenerator() {
  const [content_type, setContentType] = useState("shayari");
  const [user_query, setUserQuery] = useState("");
  const [shayariEn, setShayariEn] = useState("");
  const [shayariHi, setShayariHi] = useState("");
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api1/shayarigenerator`, {
        params: { content_type, user_query },
      });

      setShayariEn(response.data.shayariEn);
      setShayariHi(response.data.shayariHi);
      setError(null);
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
      setShayariEn("");
      setShayariHi("");
    }
  };

  return (
    <div className="container">
      <h1>{content_type.toUpperCase()} Generator</h1>
      <div>
        <select
          value={content_type}
          onChange={(e) => setContentType(e.target.value)}
        >
          <option value="shayari">Shayari</option>
          <option value="jokes">Jokes</option>
          <option value="short-stories">Short Stories</option>
        </select>
        <input
          type="text"
          placeholder="Enter a keyword"
          value={user_query}
          onChange={(e) => setUserQuery(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate {content_type}</button>
      </div>
      <div>
        {error && <p>{error}</p>}
        {shayariEn && <p>English {content_type}: {shayariEn}</p>}
        {shayariHi && <p>Hindi {content_type}: {shayariHi}</p>}
      </div>
    </div>
  );
}
