async function fetchAIResponseWithRetry(message, attempts = 5) {
  let delay = 2000; // Start with 2 seconds
  for (let i = 0; i < attempts; i++) {
    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o",
        messages: [{ role: "user", content: message }],
      }, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      if (error.response?.status === 429) {
        await new Promise(res => setTimeout(res, delay));
        delay *= 2;
      } else {
        throw error;
      }
    }
  }
  throw new Error("API rate limit exceeded. Try again later.");
}