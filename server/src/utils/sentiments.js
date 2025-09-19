import Sentiment from "sentiment";

const sentiment = new Sentiment();

export function analyzeSentiment(text) {
  const result = sentiment.analyze(text);
  return {
    score: result.score, // overall polarity
    comparative: result.comparative,
    positive: result.positive,
    negative: result.negative,
  };
}
