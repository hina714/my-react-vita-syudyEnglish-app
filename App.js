import React, { useState } from "react";
import words from "./data/words";
import WordCard from "./components/WordCard";

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % words.length);
  };

  return (
    <div className="App">
      <h1>TOEIC単語帳</h1>
      <WordCard word={words[index]} onNext={handleNext} />
    </div>
  );
}

export default App;
