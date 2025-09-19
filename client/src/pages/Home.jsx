import { useState } from "react";
import AudioUploader from "../components/AudioUploader";
import ResultCard from "../components/ResultCard";
import Loader from "../components/Loader";

function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async (file) => {
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("audio", file);

    try {
      const res = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        🎙️ Voice to Sentiment Analyzer
      </h1>
      <AudioUploader onUpload={handleUpload} />
      {loading && <Loader />}
      {result && <ResultCard result={result} />}
    </div>
  );
}

export default Home;

