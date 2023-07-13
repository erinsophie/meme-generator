import React from 'react';
import headerImg from '../img/troll-face.png';

function Header() {
  return (
    <div className="header">
      <img src={headerImg} alt="meme face" className="header-image" />
      <h1 className="header-title">Meme Generator</h1>
    </div>
  );
}

export default Header;
