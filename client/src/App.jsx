// import React from "react";
// import UploadForm from "./components/UploadForm";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
//         <h1 className="text-2xl font-bold text-center mb-6">
//           Audio Transcription & Sentiment Analysis
//         </h1>
//         <UploadForm />
//       </div>
//     </div>
//   );
// }

// export default App;
import HomePage from "./components/HomePage";
import UploadForm from "./components/UploadForm";
import AnalyticsPage from "./components/AnalyticsPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "upload":
        return <UploadForm />;
      case "analytics":
        return <AnalyticsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-red-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
