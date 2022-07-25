import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Quotes } from "./components/Quotes";
import quotes from "./json/quotes.json";
import arrayOfColors from "./utils/arrayOfColors";

function App() {

  const random = arr => {

    const indexRandom = Math.floor(Math.random() * arr.length);

    return arr[indexRandom];

  };

  let randomQuotes = random(quotes);
  let randomColors = random(arrayOfColors);

  const [randomQuote, setRandomQuote] = useState(randomQuotes);
  const [randomColor, setRandomColor] = useState(randomColors);

  const getElementRandom = () => {

    randomQuotes = random(quotes);
    randomColors = random(arrayOfColors);
    
    setRandomQuote(randomQuotes);
    setRandomColor(randomColors);

  };

  const style = {
    background: randomColor,
    color: randomColor
  };

  return (
    <div className="App" style={style}>
      <Quotes randomQuote={randomQuote} />
      <Button getElementRandom={getElementRandom} style={style} />
    </div>
  );
}

export default App;
