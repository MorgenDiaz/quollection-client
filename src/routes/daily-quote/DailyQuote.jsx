import React from "react";

function DailyQuote({ quote }) {
  const { content, author, dateAdded, tags } = quote;

  return (
    <div className="flex flex-col items-stretch h-full gap-2 p-4 text-left ">
      <p className="text-2xl font-semibold leading-10 text-gray-900">
        {content}
      </p>

      <p className="text-lg font-bold text-left text-gray-700">{author}</p>

      <p className="mt-4 text-left text-gray-900">{dateAdded}</p>

      <div className="flex">
        {tags.map((tag, index) => {
          return (
            <p
              key={index}
              className="p-1 text-sm text-left border border-gray-700 border-solid rounded-sm border-1"
            >
              {tag}
            </p>
          );
        })}
      </div>

      <button className="p-2 mt-6 font-bold text-gray-200 capitalize bg-gray-700 border ">
        Next Quote
      </button>
    </div>
  );
}

export default DailyQuote;
