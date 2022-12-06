import React, { useEffect, useState } from "react";import { BgColor, BorderLine, StyledBox, StyledImg, StyledName, CharacterImg } from "../StylesPages/PageLayout"
import { useParams } from 'react-router-dom';
import { Container } from "../StylesPages/PageLayout";
import "../Character/CharacterDetail.css"

function ArtifactDetail() {
  const [artifact, setArtifact] = useState([]);
    const { id } = useParams();
    // fetch api
    async function getArtifact() {
      const res = await fetch("https://api.genshin.dev/artifacts/"+id);
      res
      .json()
      .then (res => {setArtifact(res)
      console.log(res);})
      .catch (err => console.log(err))
    }
    useEffect (()=> {
      getArtifact();
    },[])
    
    console.log(useParams());
  
    return (
      <BgColor>
        <Container>
          <BorderLine>
              <div style={{display: "grid", gridTemplateColumns:"60% 40%"}}>
                <div style={{margin: "20px"}}>
                  <h1>{artifact.name}</h1>
                  <div className="twoBonus">
                    <h3>Bonus 2 peices</h3>
                    <br/>
                    <p style={{textAlign: "center", fontSize: "20px"}}>{artifact["2-piece_bonus"]}</p>
                  </div> 
                  <br/>
                  <br/>
                  <div className="fourBonus">
                    <h3>Bonus 4 peices</h3>
                    <br/>
                    <p style={{textAlign: "center", fontSize: "20px"}}>{artifact["4-piece_bonus"]}</p>
                  </div>                  
                </div>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "60px"}}>
                    <img className="artifactIcon" src={"https://api.genshin.dev/artifacts/"+ id +"/circlet-of-logos"} />
                    <img className="artifactIcon" src={"https://api.genshin.dev/artifacts/"+ id +"/goblet-of-eonothem"} />
                    <img className="artifactIcon" src={"https://api.genshin.dev/artifacts/"+ id +"/flower-of-life"} />
                    <img className="artifactIcon" src={"https://api.genshin.dev/artifacts/"+ id +"/plume-of-death"} />
                    <img className="artifactIcon" src={"https://api.genshin.dev/artifacts/"+ id +"/sands-of-eon"} />
                </div>
              </div>
          </BorderLine>
        </Container>
      </BgColor>
  )
}

export default ArtifactDetail