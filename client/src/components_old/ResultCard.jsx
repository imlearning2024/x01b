function ResultCard({ result }) {
  return (
    <div className="mt-6 p-4 border rounded-xl shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-2">📃 Transcription:</h2>
      <p className="text-gray-700">{result.text || "No text found"}</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">😊 Sentiment:</h2>
      <p className="text-gray-700">
        Score: <span className="font-bold">{result.sentiment?.score}</span>
      </p>
      <p className="text-gray-700">
        Comparative:{" "}
        <span className="font-bold">{result.sentiment?.comparative}</span>
      </p>
    </div>
  );
}

export default ResultCard;
