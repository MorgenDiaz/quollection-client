import QuoteSummary from "./QuoteSummary";

function QuoteSummaryList({ quotes }) {
  return (
    <div className="flex flex-col gap-y-4">
      {quotes ? (
        quotes.map((quote, index) => {
          return <QuoteSummary key={index} quote={quote} />;
        })
      ) : (
        <p>There are no quotes in your quollection.</p>
      )}
    </div>
  );
}

export default QuoteSummaryList;
