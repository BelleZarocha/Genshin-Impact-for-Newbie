import React, { useEffect, useState } from "react";
import { Container } from "../StylesPages/PageLayout";

function EnemyList() {
    const [enemies, setEnemy] = useState([]);
    // fetch api
    async function getEnemies() {
      const res = await fetch("https://api.genshin.dev/enemies");
      res
      .json()
      .then (res => setEnemy(res))
      .catch (err => console.log(err))
    }
    useEffect (()=> {
      getEnemies();
    },[])
  
    return (
      <Container>
        <h1>Genshin Enemies</h1>
        <div>
          <div>
              {enemies.map(enemy=> <div>{enemy.charAt(0).toUpperCase() + enemy.slice(1)}</div>)}
          </div>   
        </div> 
      </Container>
    );
  }
  
  export default EnemyList;