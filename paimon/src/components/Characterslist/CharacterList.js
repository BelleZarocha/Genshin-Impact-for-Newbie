import React, { useEffect, useState } from "react";
import "../StylesPages/ShowList.css"
import "./CharacterList.css"
import { Container, BgColor, BorderLine, RarityBox, StyledImg, StyledName } from "../StylesPages/PageLayout"
import {  useNavigate } from 'react-router-dom';
import Anemo from './elementImg/Anemo.png'
import Cryo from './elementImg/Cryo.png'
import Dendro from './elementImg/Dendro.png'
import Electro from './elementImg/Electro.png'
import Geo from './elementImg/Geo.png'
import Hydro from './elementImg/Hydro.png'
import Pyro from './elementImg/Pyro.png'

function CharacterList() {
      const [characters, setCharacter] = useState([]);
      const [detail, setDetail] = useState([]);
      const navigate = useNavigate();
      // fetch api
      async function getCharacters() {
        const res = await fetch("https://api.genshin.dev/characters");
        res
        .json()
        .then (res => setCharacter(res))
        .catch (err => console.log(err))
      }

      const getDetail=()=>{
        characters.map(async element => {
          const resultObj= await fetch(`https://api.genshin.dev/characters/${element}`)
          resultObj.json()
          .then((res2)=>{
            const objResult ={...res2,id:element} 
            
            setDetail(oldArray =>oldArray.concat(objResult))
            
            })
        })
      }
      useEffect (()=> {
        getCharacters();
      },[])

      useEffect(() => {
        if(characters && characters.length>0){
        getDetail()
       }
      }, [characters])

      
      
    return (
    <>
    <BgColor>
      <Container>
        <BorderLine>
          <h1>Genshin Characters</h1>
          <div className="visionFilter">
            <div className="visionFilterBG"><img src={Anemo} style={{height:"35px"}}/></div>
            <div className="visionFilterBG"><img src={Cryo} style={{height:"35px"}}/></div>
            <div className="visionFilterBG"><img src={Dendro} style={{height:"35px"}}/></div>
            <div className="visionFilterBG"><img src={Electro} style={{height:"35px"}}/></div>
            <div className="visionFilterBG"><img src={Geo} style={{height:"35px"}}/></div>
            <div className="visionFilterBG"><img src={Hydro} style={{height:"35px"}}/></div>
            <div className="visionFilterBG"><img src={Pyro} style={{height:"35px"}}/></div>     
          </div>
          <div style={{background:"#e4c179", height:"4px", width:"95%", margin:"0 auto", marginBottom:"10px"}}/>
          
          <br/>
          <div className="flexBox">
            {/* map character list from api and set them to capitalize the first letter */}
            {detail.map(character => 
              <RarityBox rarity={character.rarity} onClick={()=>navigate(`/CharacterList/${character.id}`)}>
                <div vision={character.vision}></div>
                <StyledImg style={{height:"270px"}}src={"https://api.genshin.dev/characters/" + character.id + "/card"}/>
                <div className="visionIconBG">
                  <img className="visionIcon" src={"https://api.genshin.dev/elements/" + character.vision.toLowerCase() + "/icon"}/>
                </div>
                <StyledName>{character.name}</StyledName>
                {/* <StyledName>{character.rarity}</StyledName> */}
              </RarityBox>
            )}
          </div>
        </BorderLine>    
      </Container>
    </BgColor>
    </>
  );
}


export default CharacterList;
  