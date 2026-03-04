import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const analyzeSentiment = async (movie: any) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are a professional movie review analyst.

Based on this movie data:

Title: ${movie.Title}
IMDb Rating: ${movie.imdbRating}
Genre: ${movie.Genre}
Plot: ${movie.Plot}

Generate realistic audience sentiment.

Respond ONLY in valid JSON format:

{
  "summary": "3-4 line realistic audience sentiment summary",
  "classification": "Positive | Mixed | Negative"
}
`,
  });

  const text = response.text ?? "";

  // Clean markdown if Gemini wraps JSON in ```json
  const cleaned = text.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    return {
      summary: "AI analysis temporarily unavailable.",
      classification: "Mixed",
    };
  }
};
