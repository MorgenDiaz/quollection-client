import { useEffect, useState } from "react";

const testQuotes = [
  {
    content: `It is literally true that millions come easier
       to a trader after he knows how to trade than hundreds did
        in the days of his ignorance.`,
    author: `Jesse Livermore`,
    dateAdded: `Feb 14, 2021`,
    tags: [`Stock Market`],
  },
  {
    content: `In all of trading, close is close enough and perfection is rare.`,
    author: `Al Brooks`,
    dateAdded: `March 23, 2022`,
    tags: [`Stock Market`],
  },
];

function useQuotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setQuotes(testQuotes);
  });

  return quotes;
}

export default useQuotes;
