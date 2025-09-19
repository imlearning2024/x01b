import React from "react";
import { Music } from "lucide-react";

const TranscriptViewer = ({ transcript, positiveWords, negativeWords }) => {
  const renderTranscript = (text) => {
    if (!text) return null;
    const words = text.split(" ");
    return words.map((word, i) => {
      const cleaned = word.replace(/[.,?!]/g, "").toLowerCase();
      if (positiveWords.includes(cleaned)) {
        return (
          <span key={i} className="text-green-400 font-semibold mr-1">
            {word}
          </span>
        );
      }
      if (negativeWords.includes(cleaned)) {
        return (
          <span key={i} className="text-red-400 font-semibold mr-1">
            {word}
          </span>
        );
      }
      return (
        <span key={i} className="text-gray-200 mr-1">
          {word}
        </span>
      );
    });
  };

  return (
    <div className="p-8 rounded-3xl bg-gray-900/70 backdrop-blur-xl border border-pink-500/40 shadow-[0_0_25px_rgba(236,72,153,0.4)]">
      <h2 className="text-2xl font-bold text-pink-400 mb-6 flex items-center space-x-2">
        <Music className="w-6 h-6" />
        <span>Transcript</span>
      </h2>
      <p className="text-lg leading-relaxed">{renderTranscript(transcript)}</p>
    </div>
  );
};

export default TranscriptViewer;
