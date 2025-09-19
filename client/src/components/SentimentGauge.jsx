import React from "react";

const SentimentGauge = ({ comparative, score }) => {
  const getGaugePercentage = (comparativeScore) => {
    return Math.max(0, Math.min(100, ((comparativeScore + 1) / 2) * 100));
  };

  return (
    <div className="p-8 rounded-3xl bg-gray-900/70 backdrop-blur-xl border border-purple-600/40 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Sentiment Analysis
      </h2>

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="70"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="70"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${
                (440 * getGaugePercentage(comparative)) / 100
              }, 440`}
              strokeLinecap="round"
              className="transition-all duration-700 ease-in-out"
              transform="rotate(-90 100 100)"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-white">
              {comparative.toFixed(2)}
            </p>
            <p className="text-gray-400 text-sm">Comparative</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Score: <span className="text-white font-semibold">{score}</span>
        </p>
      </div>
    </div>
  );
};

export default SentimentGauge;
