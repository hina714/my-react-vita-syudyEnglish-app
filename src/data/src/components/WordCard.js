import React from "react";

const WordCard = ({ word, onNext }) => {
  return (
    <div className="card">
      <h2>{word.word}</h2>
      <p>意味：{word.meaning}</p>
      <p>例文：{word.example}</p>
      <button onClick={onNext}>次へ</button>
    </div>
  );
};

export default WordCard;
