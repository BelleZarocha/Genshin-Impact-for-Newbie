import React, { useEffect, useState } from "react";import { BgColor, BorderLine, StyledBox, StyledImg, StyledName, CharacterImg } from "../StylesPages/PageLayout"
import { useParams } from 'react-router-dom';
import { Container } from "../StylesPages/PageLayout";
import "../Character/CharacterDetail.css"

function EnemyDetail() {
  const [enemie, setEnemy] = useState([]);
    // const [vision, setVision] = useState("")
    const { id } = useParams();
    // fetch api
    async function getEnemy() {
      const res = await fetch("https://api.genshin.dev/enemies/"+id);
      res
      .json()
      .then (res => {setEnemy(res)
      console.log(res);})
      .catch (err => console.log(err))
    }
    useEffect (()=> {
      getEnemy();
    },[])
    
    console.log(useParams());
  
    return (
      <BgColor>
        <Container>
          <BorderLine>
              <div style={{display: "grid", gridTemplateColumns:"60% 40%"}}>
                <div style={{margin: "20px"}}>
                  <h1>{enemie.name}</h1>
                  <h3>{enemie.title}</h3>
                  <br/>
                  <p style={{textAlign: "center" , border: "1px solid #fff", padding: "10px", borderRadius: "10px"}}>{enemie.description}</p>
                  <br />
                  <p><b>Region: </b>{enemie.region}</p>
                  <br />
                  <p><b>Type: </b>{enemie.type}</p>
                  <br/>
                  <p><b>Elements : </b>{enemie.elements + " "}</p>
                  
                </div>
                <div style={{display: "flex", justifyContent: "center" ,}}>
                <CharacterImg src={"https://api.genshin.dev/enemies/"+id+"/icon"} />
                </div>
              </div>
          </BorderLine>
        </Container>
      </BgColor>
  )
}

export default EnemyDetail