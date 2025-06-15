import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message } = req.body;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: { Authorization: `Bearer ${apiKey}` },
      }
    );

    res.status(200).json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "API request failed" });
  }
}