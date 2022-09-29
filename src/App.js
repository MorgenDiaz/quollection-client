import React from "react";
import { Routes, Route } from "react-router-dom";
import useRandomQuote from "./hooks/use-random-quote";
import "./App.css";
import DailyQuote from "./routes/daily-quote/DailyQuote";
import Header from "./Header";
import NoQuotesAvailable from "./routes/daily-quote/NoQuotesAvailable";

function App() {
  const quote = useRandomQuote();

  return (
    <div className="h-screen bg-gray-300">
      <Header />
      <Routes>
        <Route
          path="/"
          element={quote ? <DailyQuote quote={quote} /> : <NoQuotesAvailable />}
        />
      </Routes>
    </div>
  );
}

export default App;
