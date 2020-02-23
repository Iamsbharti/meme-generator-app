import React, { useState, useEffect } from "react";

function Memegenerator() {
  const [topText, setTopTxt] = useState("");
  const [bottomTxt, setBottomTxt] = useState("");
  const [allMemeArry, setAllMemeArray] = useState([]);

  useEffect({
     fetch("")
    .then(response=>response.json())
    .then(response=>{
      const {meme}=response.data;
      console.log(meme[0]);
      setAllMemeArray(meme);
    })
  });
  const handleSubmit = event => {
    console.log("submit");
    event.preventDefault();
  };
  return (
    <div>
      <form className="meme-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="topText"
          placeholder="Top Text?"
          value={topText}
          onChange={e => setTopTxt(e.target.value)}
        />
        <input
          type="text"
          name="bottomTxt"
          placeholder="bottom Text?"
          value={bottomTxt}
          onChange={e => setBottomTxt(e.target.value)}
        />
        <button>Generate</button>
      </form>
      <div className="meme">
        <img src="http://i.imgflip.com/1bij.jpg" alt="?" />
        <h2 className="top-text">{topText}</h2>
        <h2 className="bottom-text">{bottomTxt}</h2>
      </div>
    </div>
  );
}
export default Memegenerator;
