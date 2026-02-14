import React from 'react';
import './Mods.css'; // Reuse same styling as Mods page

function Home() {
  return (
    <div className="home">

      {/* Welcome Section */}
      <h1>Welcome to MorganicYT's Website</h1>
      <p>
        I'm MorganicYT – a Minecraft modder and YouTuber. Check out my mods and videos below!
      </p>

      {/* Buttons */}
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="https://youtube.com/@MorganicYT" target="_blank" rel="noreferrer">
          <button className="btn">📺 Visit YouTube</button>
        </a>
        <a href="https://discord.gg/yourserver" target="_blank" rel="noreferrer">
          <button className="btn">💬 Join Discord</button>
        </a>
        <a href="mailto:morganliross@hotmail.com">
          <button className="btn">📧 Contact Me</button>
        </a>
      </div>

      {/* Mod Showcase Section */}
      <section className="mod-showcase" style={{ marginTop: '4rem' }}>
        <h2>🛠️ Featured Minecraft Mods</h2>
        <div className="mod-card-container">
          <div className="mod-card">
            <h2>Civilians</h2>
            <p><strong>Version:</strong> 1.21.4</p>
            <p>NPCs with custom paths, skins, dialogs – like Citizens, but as a mod!</p>
            <a href="https://github.com/yourusername/civilians" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          <div className="mod-card">
            <h2>Instant Resources</h2>
            <img public="/images/test.png" alt="Instant Resources" className="mod-image" />
            <p><strong>Version:</strong> 1.20.1 (Modern Minecraft versions coming soon!)</p>
            <p>Reload only changed resource pack files. Super fast for developers!</p>
            <a href="https://www.planetminecraft.com/mod/instant-resources" target="_blank" rel="noopener noreferrer">
              View on Planet Minecraft
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Embed */}
      <section style={{ marginTop: '4rem' }}>
        <h2>🎬 Latest YouTube Video</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;
