// src/components/Mods.js
import React from 'react';
import './Mods.css';

const mods = [
  {
    name: 'Golden Potato',
    description: 'Adds a rare and powerful golden potato to Minecraft, dropped by zombies!',
    version: '1.19.2 - 1.21.4',
    link: 'https://github.com/yourusername/golden-potato',
    platform: 'GitHub',
  },
  {
    name: 'Instant Resources',
    description: 'Improves resource pack reload times by only updating what changed.',
    version: '1.20.1 - 1.21.5',
    link: 'https://www.planetminecraft.com/mod/instant-resources',
    platform: 'Planet Minecraft',
    image: '/public/images/test.jpg',
  },
  {
    name: 'The Weird Mod',
    description: 'A mod that adds a variety of strange and funny items to Minecraft.',
    version: '1.20.1 - 1.21.4',
    link: 'https://www.curseforge.com/minecraft/mc-mods/the-weird-mod',
    platform: 'CurseForge',
  },
];

export default function Mods() {
  return (
    <div className="mods-page">
      <h1>My Minecraft Mods</h1>
      <p>All mods below are compatible with the latest versions of Minecraft.</p>
      <div className="mods-list">
        {mods.map((mod, index) => (
          <div className="mod-card" key={index}>
            <h2>{mod.name}</h2>
              {mod.image && <img src={mod.image} alt={mod.name} className="mod-image" />}
            <p><strong>Version:</strong> {mod.version}</p>
            <p>{mod.description}</p>
            <a href={mod.link} target="_blank" rel="noopener noreferrer">
              View on {mod.platform}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
