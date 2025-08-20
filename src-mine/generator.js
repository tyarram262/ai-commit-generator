import dotenv from "dotenv";
dotenv.config({ path: '.env.local' });
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export default async function generateMessage(input) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Write a concise git commit message describing the following git diff:\n${input}`
});
  return (response.text);
}

