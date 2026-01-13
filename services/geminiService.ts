import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userMessage: string) => {
  const systemInstruction = `
    You are 'Githui', the AI Wedding Cinematography Consultant for 'Weddings by Githui'. 
    Your tone is sophisticated, luxurious, and highly professional.
    
    About Weddings by Githui:
    - We specialize in high-end, luxury wedding cinematography worldwide.
    - Our goal is to preserve emotions through cinematic storytelling.
    - We limit commissions to ensure unparalleled attention to detail.
    
    Answer questions about our process, packages, and wedding film artistry.
    Keep responses concise and elegant.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: userMessage }] }],
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "I apologize, but our concierge service is momentarily offline. Please use our inquiry form for assistance.";
  }
};