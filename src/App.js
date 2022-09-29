import React from "react";
import useRandomQuote from "./hooks/use-random-quote";
import "./App.css";
import DailyQuote from "./routes/daily-quote/DailyQuote";
import Header from "./Header";

function App() {
  const quote = useRandomQuote();

  return (
    <div className="h-screen bg-gray-300">
      <Header />
      {quote && <DailyQuote quote={quote} />}
    </div>
  );
}

export default App;
