import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiErr, ApiRes } from "../utils/apiResponse.js";
import { postAudio } from "../utils/postAudio.js";
import { analyzeSentiment } from "../utils/sentiments.js";
const main = asyncHandler(async (req, res) => {
  console.log(req.body);
  const response = await postAudio(req.file.path);
  const transcript = response?.data;
  const err = response?.error;
  const sentiments = analyzeSentiment(transcript.data);
  res.json(new ApiRes("uploaded", { transcript, sentiments }, 200));
});
export default main;
