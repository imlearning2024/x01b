// utils/postAudio.js
import axios from "axios";
import FormData from "form-data";
import fs from "fs";

/**
 * Send audio file to FastAPI server for transcription
 * @param {string} filePath - path of audio file
 * @returns {Promise<Object>} - transcription response
 */
export async function postAudio(filePath) {
    try {
        const formData = new FormData();
        formData.append("file", fs.createReadStream(filePath)); // 👈 FastAPI expects "file"

        const response = await axios.post("http://localhost:3000/audio", formData, {
            headers: {
                ...formData.getHeaders(),
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
        });

        return response; // transcription result
    } catch (err) {
        console.error("Error posting audio:", err.message);
        throw err;
    }
}
