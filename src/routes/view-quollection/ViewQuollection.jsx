import useQuotes from "../../hooks/useQuotes";
import QuoteSummaryList from "./QuoteSummaryList";

function ViewQuollection() {
  const quotes = useQuotes();

  return (
    <div className="flex flex-col items-stretch h-full gap-2 p-4 text-left ">
      <input type="text" placeholder="Search Quollection" className="p-3" />

      <h2 className="text-gray-700">Filter by tag</h2>

      <button className="self-start mb-4">Add Tag</button>

      <QuoteSummaryList quotes={quotes} />
    </div>
  );
}

export default ViewQuollection;
