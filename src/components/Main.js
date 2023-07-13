import React, { useState, useEffect } from 'react';

function Main() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((memesData) => setAllMemes(memesData.data.memes));
  }, []);

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="main">
      <div className="input-container">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />

        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
      </div>

      <button className="btn" onClick={getMemeImg}>
        Get a new meme image🖼️
      </button>

      <div className="meme-img-container">
        <img src={meme.randomImage} alt="random meme" className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Main;
