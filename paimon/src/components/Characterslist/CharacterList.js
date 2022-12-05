import React, { useEffect, useState } from "react";
import "../StylesPages/ShowList.css"
import { Container } from "../StylesPages/PageLayout";
import { StyledBox, StyledImg, StyledName } from "../StylesPages/ShowListStyled"
import { render } from "@testing-library/react";

function CharacterList() {
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
      <>
      <div className="BG-color">
        <Container>
          <div className="border-line">
            <h1>Genshin Characters</h1>
            <div className="flexCharacter">
              {/* map character list from api and set them to capitalize the first letter */}
              {characters.map(character => 
                <StyledBox>
                  <StyledImg style={{height:"270px"}}src={"https://api.genshin.dev/characters/" + character + "/card"}/>
                  <StyledName>{character.charAt(0).toUpperCase() + character.slice(1)}</StyledName>
                </StyledBox> 
              )}

              {characters.map((character) => <p>{character.rarity}</p>)}
            </div>
          </div>    
        </Container>
      </div>
      </>
    );
  }
  
  
  export default CharacterList;
  