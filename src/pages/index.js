// pages/index.js
import { useState } from 'react';
import Link from 'next/link';
import UploadFile from '../components/UploadFile';
import axios from 'axios';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/chat', { message: input });
      setResponse(res.data.reply);
    } catch (err) {
      setResponse('Failed to get a response from the server.');
    }
  };

  return (
    <div>
      <h1>Upload to Firebase Storage</h1>
      <UploadFile />

      <header className="header">
        <h1>Culture & Heritage</h1>
        <p>Discover the beauty of traditions and historical landmarks.</p>
      </header>

      <nav>
        <Link href="/about">About</Link> |{' '}
        <Link href="/contact">Contact</Link> |{' '}
        <Link href="/gallery">Gallery</Link> |{' '}
        <Link href="/artifacts">View Artifacts</Link>
      </nav>

      <section className="gallery">
        {/* Your card components remain unchanged */}
        {/* Example card */}
        <div className="card">
          <img src="https://i.pinimg.com/736x/b2/0b/f0/b20bf03fed8b5226a4759d64877282d2.jpg" alt="Festivals & Celebrations" />
          <h3>Festivals & Celebrations</h3>
          <p>A joyful celebration of colors and unity.</p>
        </div>
        {/* ... rest of your cards */}
      </section>

      <section className="ai-interaction">
        <h2>Ask About Culture & Heritage</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about Indian traditions..."
            required
          />
          <button type="submit">Ask GPT</button>
        </form>
        {response && (
          <div className="gpt-response">
            <h3>AI Response:</h3>
            <p>{response}</p>
          </div>
        )}
      </section>
    </div>
  );
}
