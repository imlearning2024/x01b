import { useRef } from "react";

function AudioUploader({ onUpload }) {
  const fileInput = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="file"
        accept="audio/*"
        ref={fileInput}
        onChange={handleChange}
        className="hidden"
      />
      <button
        onClick={() => fileInput.current.click()}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Upload Audio
      </button>
    </div>
  );
}

export default AudioUploader;

