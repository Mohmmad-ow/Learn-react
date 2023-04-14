import { useEffect, useState } from "react";


export default function Quote() {
  
    function getRandomQuote(quotes) {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
    const [quotes, setQuotes] = useState(null)
    const [quote, setQuote] = useState(null)
    
  
    useEffect(() => {
      fetch('https://type.fit/api/quotes')
    
  
    .then((res) => res.json() )
    .then((json) => {
      setQuotes(json)
      setQuote(getRandomQuote(json))
    })
    .catch(err => console.log(err));
    }, [])
     
    let data = quote ? (
      <div className="quote-div">
          <div className="quote-data">
            <h2>{quote.text}</h2>
            <i>{quote.author}</i>
          </div>
          <button className="quote-button" onClick={ () => { setQuote(getRandomQuote(quotes)) } }>Generate Quote</button>
      </div>
    ) : <h1 >...Loading</h1>
  
    return (
      <div> 
        {data}
      </div>
    )
  
  }
  