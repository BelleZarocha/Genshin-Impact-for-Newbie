import React, { useEffect, useState } from "react";import { BgColor, BorderLine, StyledBox, StyledImg, StyledName, CharacterImg } from "../StylesPages/PageLayout"
import { useParams } from 'react-router-dom';
import { Container } from "../StylesPages/PageLayout";
import "../Character/CharacterDetail.css"

function WeaponDetail() {
  const [weapon, setWeapon] = useState([]);
    const { id } = useParams();
    // fetch api
    async function getWeapon() {
      const res = await fetch("https://api.genshin.dev/weapons/"+id);
      res
      .json()
      .then (res => {setWeapon(res)
      console.log(res);})
      .catch (err => console.log(err))
    }
    useEffect (()=> {
      getWeapon();
    },[])
    
    console.log(useParams());
  
    return (
      <BgColor>
        <Container>
          <BorderLine>
              <div style={{display: "grid", gridTemplateColumns:"60% 40%"}}>
                <div style={{margin: "20px"}}>
                  <h1>{weapon.name}</h1>
                  <h3>{weapon.title}</h3>
                  <br/>
                  <p style={{textAlign: "center" , border: "1px solid #fff", padding: "10px", borderRadius: "10px"}}>{weapon.passiveDesc}</p>
                  <br />
                  <p><b>Rarity: </b>{weapon.rarity}</p>
                  <br />
                  <p><b>Type: </b>{weapon.type}</p>
                  <br/>
                  <p><b>Base Attack : </b>{weapon.baseAttack + " "}</p>
                  <br/>
                  <p><b>Sub-Stat : </b>{weapon.subStat}</p>
                  
                </div>
                <div style={{display: "flex", justifyContent: "center" ,}}>
                <CharacterImg src={"https://api.genshin.dev/weapons/"+id+"/icon"} />
                </div>
              </div>
          </BorderLine>
        </Container>
      </BgColor>
  )
}

export default WeaponDetail