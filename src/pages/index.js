import Link from 'next/link'; 

export default function Home() {
  return (
    <div>
      <header className="header">
        <h1>Culture & Heritage</h1>
        <p>Discover the beauty of traditions and historical landmarks.</p>
      </header>

      <nav>
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link> | 
        <Link href="/gallery">Gallery</Link>
      </nav>

      <section className="gallery">
        <div className="card">
          <img src="https://i.pinimg.com/736x/b2/0b/f0/b20bf03fed8b5226a4759d64877282d2.jpg" alt="Festivals & Celebrations" />
          <h3>Festivals & Celebrations</h3>
          <p>A joyful celebration of colors and unity.</p>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/ea/f3/63/eaf3630df274e7b01afef0942d892355.jpg" alt="Traditional Attire" />
          <h3>Traditional Attire</h3>
          <p>Elegance in every thread of Indian culture.</p>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/53/73/51/537351962ef93aee2d854ceac1396603.jpg" alt="Classical & Folk Dances" />
          <h3>Classical & Folk Dances</h3>
          <p>Graceful movements, timeless stories.</p>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/7d/b0/26/7db02666282faa1d42f012a6707cd747.jpg" alt="Historical Monuments" />
          <h3>Historical Monuments</h3>
          <p>Echoes of India's rich heritage.</p>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/3e/75/07/3e75078a49c9ffc68d58566ee337f7f5.jpg" alt="Traditional Art & Crafts" />
          <h3>Traditional Art & Crafts</h3>
          <p>Handcrafted beauty that speaks history.</p>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f7/41/5f/f7415f93ecdccc842224b4790f541112.jpg" alt="Indian Cuisine" />
          <h3>Indian Cuisine</h3>
          <p>Spices, flavors, and delicious traditions.</p>
        </div>
      </section>
    </div>
  );
}
