import { useEffect, useState } from "react";
import useQuotes from "../../hooks/useQuotes";
import QuoteSummaryList from "./QuoteSummaryList";

function ViewQuollection() {
  const quotes = useQuotes();
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    setFilteredQuotes([...quotes]);
  }, [quotes]);

  const handleSearchInputChanged = (event) => {
    const searchText = event.target.value.toLowerCase();

    setFilteredQuotes(
      quotes.filter((quote) => {
        const searchableContent = quote.content.toLowerCase();
        return searchableContent.includes(searchText);
      })
    );
  };

  return (
    <div className="flex flex-col items-stretch h-full gap-2 p-4 text-left ">
      <input
        onChange={handleSearchInputChanged}
        type="text"
        placeholder="Search Quollection"
        className="p-3"
      />

      <h2 className="text-gray-700">Filter by tag</h2>

      <button className="self-start mb-4">Add Tag</button>

      <QuoteSummaryList quotes={filteredQuotes} />
    </div>
  );
}

export default ViewQuollection;
