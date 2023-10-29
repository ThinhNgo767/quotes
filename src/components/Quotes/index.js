const Quote = ({
    randomQuote,
    handelRenderRandomQuote,
  }) => {
    if (!randomQuote.tags) return;
    const tags = randomQuote.tags.join(", ")
  
    return (
      <div className="quotes">
        <fieldset>
          <legend>
            <i>Quote</i>
          </legend>
          <p className="quote-conten">{randomQuote.content}</p>
          <div className="footer-quote">
            <p className="author">
              Author: <strong>{randomQuote.author}</strong>
            </p>
            <p>
              Tags: <strong>{tags === "" ? "No tags" : tags}</strong>
            </p>
          </div>
        </fieldset>
  
        <button onClick={handelRenderRandomQuote}>random</button>
      </div>
    );
  };
  
  export default Quote;
  

