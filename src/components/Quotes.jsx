import React from "react";
import { Phrase } from "./Phrase";

export const Quotes = ({ randomQuote }) => {
  return (
    <div className="quotes">
      <Phrase randomQuote={randomQuote} />
    </div>
  );
};
