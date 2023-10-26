<label for="content-type">Content Type:</label>
<select id="content-type">
    <option value="shayari">Shayari</option>
    <option value="jokes">Jokes</option>
    <option value="short-stories">Short Stories</option>
</select>



<label for="quote-theme">Quote Theme:</label>
<select id="quote-theme">
    <option value="love">Love</option>
    <option value="life">Life</option>
    <option value="success">Success</option>
    <!-- Add more themes as needed -->
</select>


<label for="quote-length">Quote Length (Words):</label>
<input type="number" id="quote-length" min="1" value="10">
<label for="quote-genre">Quote Genre:</label>
<input type="text" id="quote-genre" placeholder="e.g., Inspirational">



<button id="generate-quote-button">Generate Quote</button>
<div id="generated-quote"></div>
