import React, { useEffect, useState } from "react";
import "../StylesPages/ShowList.css"
import { Container, BgColor, BorderLine, StyledBox, StyledImg, StyledName } from "../StylesPages/PageLayout"
import {  useNavigate } from 'react-router-dom';

function EnemyList() {
      const [enemies, setEnemy] = useState([]);
      const [detail, setDetail] = useState([]);
      const navigate = useNavigate();
      // fetch api
      async function getEnemies() {
        const res = await fetch("https://api.genshin.dev/enemies");
        res
        .json()
        .then (res => setEnemy(res))
        .catch (err => console.log(err))
      }

      const getDetail=()=>{
        console.log("getDetail");
        enemies.map(async element => {
          const resultObj= await fetch(`https://api.genshin.dev/enemies/${element}`)
          resultObj.json()
          .then((res2)=>{
            const hasParentId = detail.find((object) => res2.id === object.id)
            if (!hasParentId) {
            setDetail(oldArray =>oldArray.concat(res2))
            }
            })
        })
      }
      useEffect (()=> {
        getEnemies();
      },[])

      useEffect(() => {
        console.log("useEffect", enemies.length);

        if(enemies && enemies.length>0){
        getDetail()
       }
      }, [enemies])
      
    return (
    <>
    <BgColor>
      <Container>
        <BorderLine>
          <h1>Genshin Enemies</h1>
          <div className="flexBox">
            {/* map character list from api and set them to capitalize the first letter */}
            {console.log("Detail1: ", detail)};
            {detail.map(enemy => 
             
              <StyledBox onClick={()=>navigate(`/EnemyList/${enemy.id}`)}>
                <StyledImg style={{height:"270px"}}src={"https://api.genshin.dev/enemies/" + enemy.id + "/icon"}/>
                <StyledName>{enemy.name}</StyledName>
                {/* <StyledName>{enemy.title || "-"}</StyledName> */}

              </StyledBox>
            )}

            {/* {enemies.map((enemy) => <p>{enemy.rarity}</p>)} */}
          </div>
        </BorderLine>    
      </Container>
    </BgColor>
    </>
  );
}


export default EnemyList;
  