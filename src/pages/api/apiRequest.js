export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { userInput } = req.body; // Get user input from the frontend
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: userInput,
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    res.status(200).json({ result: data.choices[0].text }); // Send response back to frontend
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}
