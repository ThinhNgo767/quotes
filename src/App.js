import "./App.css";
import Quote from "./components/Quotes";

import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    const handleFetchQuoteAPI = async () => {
      const response = await axios.get("https://api.quotable.io/quotes");

      setQuotes(response.data.results);

      const initialQuote = getRandomQuote(response.data.results);
      setRandomQuote(initialQuote);
    };

    handleFetchQuoteAPI();
  }, []);

  const getRandomQuote = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    const randomQuote = arr[random];
    return randomQuote;
  };

  const handelRenderRandomQuote = () => {
    const quote = getRandomQuote(quotes);
    setRandomQuote(quote);
  };

  return (
    <>
      <div className="App">
        <Quote
          randomQuote={randomQuote}
          handelRenderRandomQuote={handelRenderRandomQuote}
        />
      </div>
    </>
  );
};

export default App;
