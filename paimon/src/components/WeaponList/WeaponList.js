import React, { useEffect, useState } from "react";
import { Container } from "../StylesPages/PageLayout";

function WeaponList() {
    const [weapons, setWeapon] = useState([]);
    // fetch api
    async function getWeapons() {
      const res = await fetch("https://api.genshin.dev/weapons");
      res
      .json()
      .then (res => setWeapon(res))
      .catch (err => console.log(err))
    }
    useEffect (()=> {
      getWeapons();
    },[])
  
    return (
      <Container>
        <h1>Genshin Weapons</h1>
        <div>
          <div>
              {weapons.map(weapon=> <div>{weapon.charAt(0).toUpperCase() + weapon.slice(1)}</div>)}
          </div>   
        </div> 
      </Container>
    );
  }
  
  export default WeaponList;