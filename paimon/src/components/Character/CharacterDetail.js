import React, { useEffect, useState } from "react";import { BgColor, BorderLine, StyledBox, StyledImg, StyledName, CharacterImg } from "../StylesPages/PageLayout"
import { useParams } from 'react-router-dom';
import { Container } from "../StylesPages/PageLayout";
import "./CharacterDetail.css"

function CharacterDetail() {
  const [characters, setCharacter] = useState([]);
    const [vision, setVision] = useState("")
    const { id } = useParams();
    // fetch api
    async function getCharacters() {
      const res = await fetch("https://api.genshin.dev/characters/"+id);
      res
      .json()
      .then (res => {setCharacter(res)
      console.log(res);
        setVision(res.vision.toLowerCase())
      })
      .catch (err => console.log(err))
    }
    useEffect (()=> {
      getCharacters();
    },[])
    
    console.log(useParams());
  
    return (
      <BgColor>
        <Container>
          <BorderLine>
              <div style={{display: "grid", gridTemplateColumns:"60% 40%"}}>
                <div style={{margin: "20px"}}>
                  <h1>{characters.name}</h1>
                  <h3>{characters.title}</h3>
                  <div className="visionBG">
                    <img className="visionI" src={"https://api.genshin.dev/elements/" + vision + "/icon"}/>
                  </div>
                  <br/>
                  <p style={{textAlign: "center" , border: "1px solid #fff", padding: "10px", borderRadius: "10px"}}>{characters.description}</p>
                  <br />
                  <p><b>Affiliation: </b>{characters.affiliation}</p>
                  <br />
                  <p><b>Nation: </b>{characters.nation}</p>
                  <br/>
                  <p><b>Weapon Type: </b>{characters.weapon}</p>
                  
                </div>
                <div style={{display: "flex", justifyContent: "center" ,}}>
                <CharacterImg src={"https://api.genshin.dev/characters/"+id+"/card"} />
                </div>
              </div>
          </BorderLine>
        </Container>
      </BgColor>
  )
}

export default CharacterDetail