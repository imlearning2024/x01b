import React from "react";
import SentimentGauge from "./SentimentGauge";
import WordChips from "./WordChips";
import TranscriptViewer from "./TranscriptViewer";

const Results = ({ data }) => {
  const { transcript, sentiments } = data;

  return (
    <div className="mt-12 space-y-12">
      <SentimentGauge
        comparative={sentiments.comparative}
        score={sentiments.score}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <WordChips
          title="Positive Words"
          words={sentiments.positive}
          color="green"
        />
        <WordChips
          title="Negative Words"
          words={sentiments.negative}
          color="red"
        />
      </div>

      <TranscriptViewer
        transcript={transcript.data}
        positiveWords={sentiments.positive}
        negativeWords={sentiments.negative}
      />
    </div>
  );
};

export default Results;
