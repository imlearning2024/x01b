from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from vosk import Model, KaldiRecognizer
import wave
import json
import os
import subprocess

# Load Vosk English model
model = Model("model")

app = FastAPI(title="Vosk Transcription API")

def convert_to_wav(input_path, output_path):
    """Convert any audio file to WAV PCM 16kHz mono"""
    command = [
        "ffmpeg",
        "-y",  # overwrite
        "-i", input_path,
        "-ar", "16000",  # sample rate
        "-ac", "1",      # mono
        "-f", "wav",
        output_path
    ]
    subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
    # subprocess.run(command, stdout=subprocess.STDOUT, stderr=subprocess.STDOUT, check=True)

@app.post("/audio")
async def transcribe_audio(file: UploadFile = File(...)):
    try:
        # Save uploaded file
        temp_input = f"temp_{file.filename}"
        with open(temp_input, "wb") as f:
            f.write(await file.read())

        # Convert to WAV PCM
        temp_wav = temp_input + ".wav"
        convert_to_wav(temp_input, temp_wav)

        # Open converted wav
        wf = wave.open(temp_wav, "rb")
        rec = KaldiRecognizer(model, wf.getframerate())
        result_text = ""

        while True:
            data = wf.readframes(4000)
            if len(data) == 0:
                break
            if rec.AcceptWaveform(data):
                res = json.loads(rec.Result())
                result_text += " " + res.get("text", "")

        final_res = json.loads(rec.FinalResult())
        result_text += " " + final_res.get("text", "")

        wf.close()

        # cleanup
        os.remove(temp_input)
        os.remove(temp_wav)

        return {
            "data": result_text.strip(),
            "error": None,
            "success": True,
            "lang": "en"
        }

    except Exception as e:
        return JSONResponse(
            content={
                "data": None,
                "error": str(e),
                "success": False,
                "lang": "en"
            },
            status_code=500
        )
