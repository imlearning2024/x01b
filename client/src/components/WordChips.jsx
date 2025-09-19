import React from "react";

const WordChips = ({ title, words, color }) => {
  const bg =
    color === "green"
      ? "bg-green-900/30 border-green-500/40 text-green-400"
      : "bg-red-900/30 border-red-500/40 text-red-400";

  const chipBg =
    color === "green"
      ? "bg-green-600/30 border-green-400/50 text-green-100"
      : "bg-red-600/30 border-red-400/50 text-red-100";

  return (
    <div className={`p-6 rounded-2xl border shadow-lg ${bg}`}>
      <h3 className={`text-xl font-bold mb-4`}>{title}</h3>
      <div className="flex flex-wrap gap-3">
        {words.length > 0 ? (
          words.map((word, i) => (
            <span
              key={i}
              className={`px-4 py-1 rounded-full text-sm font-semibold ${chipBg} hover:scale-110 transition-transform`}
            >
              {word}
            </span>
          ))
        ) : (
          <p className="text-gray-400">No {title.toLowerCase()} detected.</p>
        )}
      </div>
    </div>
  );
};

export default WordChips;
