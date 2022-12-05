import React, { useEffect, useState } from "react";
import "../Characterslist/CharacterBox.css"

function CharacterBox() {
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
  
  return (
    <div>

    </div>
  )
}

export default CharacterBox
