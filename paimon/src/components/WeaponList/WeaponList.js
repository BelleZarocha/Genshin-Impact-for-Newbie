import React, { useEffect, useState } from "react";
import "../StylesPages/ShowList.css"
import { Container, BgColor, BorderLine, RarityBox, StyledImg, StyledName } from "../StylesPages/PageLayout"
import {  useNavigate } from 'react-router-dom';

function WeaponList() {
      const [weapons, setWeapon] = useState([]);
      const [detail, setDetail] = useState([]);
      const navigate = useNavigate();
      // fetch api
      async function getWeapons() {
        const res = await fetch("https://api.genshin.dev/weapons");
        res
        .json()
        .then (res => setWeapon(res))
        .catch (err => console.log(err))
      }

      const getDetail=()=>{
        weapons.map(async element => {
          const resultObj= await fetch(`https://api.genshin.dev/weapons/${element}`)
          resultObj.json()
          .then((res2)=>{
            const objResult ={...res2,id:element} 
            
            setDetail(oldArray =>oldArray.concat(objResult))
            
            })
        })
      }

      useEffect (()=> {
        getWeapons();
      },[])

      useEffect(() => {
        console.log("useEffect", weapons.length);

        if(weapons && weapons.length>0){
        getDetail()
       }
      }, [weapons])
      
    return (
    <>
    <BgColor>
      <Container>
        <BorderLine>
          <h1>Genshin Weapons</h1>
          <div className="flexBox">
            {/* map weapon list from api and set them to capitalize the first letter */}
            {console.log("Detail1: ", detail)};
            {detail.map(weapon => 
             
              <RarityBox rarity={weapon.rarity} onClick={()=>navigate(`/WeaponList/${weapon.id}`)}>
                <StyledImg style={{height:"270px"}}src={"https://api.genshin.dev/weapons/" + weapon.name.toLowerCase().replace(/ /g, "-").replace("'", "-") + "/icon"}/>
                <StyledName>{weapon.name}</StyledName>
                {/* <StyledName>{enemy.title || "-"}</StyledName> */}

              </RarityBox>
            )}
          </div>
        </BorderLine>    
      </Container>
    </BgColor>
    </>
  );
}


export default WeaponList;