import React from "react";
import { Routes, Route } from "react-router-dom";
import useRandomQuote from "./hooks/use-random-quote";
import "./App.css";
import Header from "./Header";
import DailyQuote from "./routes/daily-quote/DailyQuote";
import NoQuotesAvailable from "./routes/daily-quote/NoQuotesAvailable";
import EditQuote from "./routes/edit-quote/EditQuote";

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
        <Route path="/edit_quote" element={<EditQuote />} />
      </Routes>
    </div>
  );
}

export default App;
