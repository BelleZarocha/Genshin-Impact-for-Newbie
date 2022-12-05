import React, { useEffect, useState } from "react";

function Home() {
  const [characters, setCharacter] = useState([]);
    // fetch api
    async function getCharacters() {
      const res = await fetch("https://api.genshin.dev/characters/");
      res
      .json()
      .then (res => setCharacter(res))
      .catch (err => console.log(err))
    }
    useEffect (()=> {
      getCharacters();
    },[])
    console.log(characters);
  
  return (
    <div>
      
    </div>
  )
}

export default Home
