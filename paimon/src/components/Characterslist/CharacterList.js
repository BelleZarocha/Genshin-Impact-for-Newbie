import React, { useEffect, useState } from "react";
import "./CharacterList.css"
import { Container } from "../StylesPages/PageLayout";

function CharacterList() {
    const [characters, setCharacter] = useState([]);
    // fetch api
    async function getCharacters() {
      const res = await fetch("https://api.genshin.dev/characters");
      res
      .json()
      .then (res => setCharacter(res))
      .catch (err => console.log(err))
    }
    useEffect (()=> {
      getCharacters();
    },[])
  
    return (
      <Container>
        {/* <span>{JSON.stringify(characters)}</span> */}
        <h1>Genshin Characters</h1>
        <div className="characterBoxBody">
          <div>
              {/* map character list from api and set them to capitalize the first letter */}
              {characters.map(character => <div className="characterBox">{character.charAt(0).toUpperCase() + character.slice(1)}</div>)}
          </div>   
        </div> 
      </Container>
    );
  }
  
  export default CharacterList;
  