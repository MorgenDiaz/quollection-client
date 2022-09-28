import React from "react";

function DailyQuote() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 p-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-900">
        {`Looks like you don't have any quotes yet!`}
      </h2>

      <button className="p-2 font-bold text-gray-200 capitalize bg-gray-700 border rounded-md">
        add some quotes
      </button>
    </div>
  );
}

export default DailyQuote;
