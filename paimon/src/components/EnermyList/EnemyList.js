import React, { useEffect, useState } from "react";
import { Container } from "../StylesPages/PageLayout";
import "../StylesPages/ShowList.css"
import { StyledBox, StyledImg, StyledName } from "../StylesPages/ShowListStyled"
import { render } from "@testing-library/react";

function EnemyList() {
      const [enemies, setEnemy] = useState([]);
      const [detail, setDetail] = useState([]);
      // const [isLoading, setIsLoading] = useState(false);
      // fetch api
      async function getEnemies() {
        // setIsLoading(true);
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
    <div className="BG-color">
      <Container>
        <div className="border-line">
          <h1>Genshin Enemies</h1>
          <div className="flexCharacter">
            {/* map character list from api and set them to capitalize the first letter */}
            {console.log("Detail1: ", detail)};
            {detail.map(enemy => 
             
              <StyledBox>
                <StyledImg style={{height:"270px"}}src={"https://api.genshin.dev/enemies/" + enemy.id + "/icon"}/>
                <StyledName>{enemy.name}</StyledName>
                <StyledName>{enemy.title || "-"}</StyledName>

              </StyledBox>
            )}

            {/* {enemies.map((enemy) => <p>{enemy.rarity}</p>)} */}
          </div>
        </div>    
      </Container>
    </div>
    </>
  );
}


export default EnemyList;
  