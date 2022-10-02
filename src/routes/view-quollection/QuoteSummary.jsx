function QuoteSummary({ quote }) {
  return (
    <div className="flex flex-col items-start text-left gap-y-2">
      <p className="text-lg font-semibold text-gray-900">{quote.content}</p>
      <p className="text-sm font-bold text-left text-gray-700">
        {quote.author}
      </p>

      <button className="mt-2 text-xs text-red-500 uppercase">
        Remove from quollection
      </button>
    </div>
  );
}

export default QuoteSummary;
