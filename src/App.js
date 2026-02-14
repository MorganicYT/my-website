import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Mods from './components/Mods';
import Videos from './components/Videos';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
              <Link to="/" className="hover:text-red-400">Home</Link>
              <Link to="/videos" className="hover:text-red-400">Videos</Link>
              <Link to="/mods" className="hover:text-red-400">Mods</Link>
        </nav>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/mods" element={<Mods />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
