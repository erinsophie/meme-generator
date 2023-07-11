import React from "react";

function Form() {
  return (
    <main className="main">
      <form className="form">
        <div className="input-container">
          <input type="text" placeholder="Top text"></input>
          <input type="text" placeholder="Bottom text"></input>
        </div>
        <button type="submit" className="form-btn">
          Get a new meme image🖼️
        </button>
      </form>
    </main>
  );
}

export default Form;
