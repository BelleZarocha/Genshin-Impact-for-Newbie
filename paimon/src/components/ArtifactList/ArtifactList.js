import React, { useEffect, useState } from "react";
import { Container } from "../StylesPages/PageLayout";

function ArtifactList() {
    const [artifacts, setArtifact] = useState([]);
    // fetch api
    async function getArtifacts() {
      const res = await fetch("https://api.genshin.dev/artifacts");
      res
      .json()
      .then (res => setArtifact(res))
      .catch (err => console.log(err))
    }
    useEffect (()=> {
      getArtifacts();
    },[])
  
    return (
      <Container>
        <h1>Genshin Artifacts</h1>
        <div>
          <div>
              {artifacts.map(artifact=> <div>{artifact.charAt(0).toUpperCase() + artifact.slice(1)}</div>)}
          </div>   
        </div> 
      </Container>
    );
  }
  
  export default ArtifactList;