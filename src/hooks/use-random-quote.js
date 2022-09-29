const { useState, useEffect } = require(`react`);

function useRandomQuote() {
  const [randomQuote, setRandomQuote] = useState(null);

  const testQuote = {
    content: `It is literally true that millions come easier
       to a trader after he knows how to trade than hundreds did
        in the days of his ignorance.`,
    author: `Jesse Livermore`,
    dateAdded: `Feb 14, 2021`,
    tags: [`Stock Market`],
  };

  useEffect(() => {
    setRandomQuote(testQuote);
  }, []);

  return randomQuote;
}

export default useRandomQuote;
