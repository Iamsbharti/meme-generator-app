import React, { useState, useEffect } from "react";

function Memegenerator() {
  const [topText, setTopTxt] = useState("");
  const [bottomTxt, setBottomTxt] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemeArry, setAllMemeArray] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        //console.log(memes[0]);
        setAllMemeArray(memes);
      });
  }, []);
  const handleSubmit = event => {
    console.log("submit");
    event.preventDefault();
    let randomIndex = Math.floor(Math.random() * allMemeArry.length);
    //console.log(randomIndex);
    //console.log("MemeImageURL:"+allMemeArry[randomIndex].url);
    setRandomImg(allMemeArry[randomIndex].url);
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
        <img src={randomImg} alt="?" />
        <h2 className="top-text">{topText}</h2>
        <h2 className="bottom-text">{bottomTxt}</h2>
      </div>
    </div>
  );
}
export default Memegenerator;
