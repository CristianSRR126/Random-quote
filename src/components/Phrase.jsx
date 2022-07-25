import React from "react";

export const Phrase = ({ randomQuote }) => {
  return (
    <>
      <blockquote className="blockquote">{randomQuote.quote}</blockquote>
      <cite className="cite">- {randomQuote.author}</cite>
    </>
  );
};
