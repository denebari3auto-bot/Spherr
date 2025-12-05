import { GoogleGenAI } from "@google/genai";
import { GeminiModel } from "../types";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingCopy = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: GeminiModel.FLASH,
      contents: `Write a short, punchy, and modern marketing tagline (max 15 words) for a company that does: ${topic}. Do not include quotes.`,
    });

    return response.text || "Could not generate content at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate content. Please try again.");
  }
};