import React, { useEffect, useState } from "react";
import "../StylesPages/ShowList.css"
import { Container, BgColor, BorderLine, StyledBox, StyledImg, StyledName } from "../StylesPages/PageLayout"
import {  useNavigate } from 'react-router-dom';

function ArtifactList() {
      const [artifacts, setArtifact] = useState([]);
      const [detail, setDetail] = useState([]);
      const navigate = useNavigate();
      // fetch api
      async function getArtifact() {
        const res = await fetch("https://api.genshin.dev/artifacts");
        res
        .json()
        .then (res => setArtifact(res))
        .catch (err => console.log(err))
      }

      const getDetail=()=>{
        artifacts.map(async element => {
          const resultObj= await fetch(`https://api.genshin.dev/artifacts/${element}`)
          resultObj.json()
          .then((res2)=>{
            const objResult ={...res2,id:element} 
            
            setDetail(oldArray =>oldArray.concat(objResult))
            
            })
        })
      }

      useEffect (()=> {
        getArtifact();
      },[])

      useEffect(() => {
        console.log("useEffect", artifacts.length);

        if(artifacts && artifacts.length>0){
        getDetail()
       }
      }, [artifacts])
      
    return (
    <>
    <BgColor>
      <Container>
        <BorderLine>
          <h1>Genshin Artifacts</h1>
          <div className="flexBox">
            {/* map artifacts list from api and set them to capitalize the first letter */}
            {console.log("Detail1: ", detail)};
            {detail.map(artifact => 
             
              <StyledBox onClick={()=>navigate(`/ArtifactList/${artifact.id}`)}>
                <StyledImg style={{height:"270px"}}src={"https://api.genshin.dev/artifacts/" + artifact.name.toLowerCase().replace(/ /g, "-").replace("'", "-") + "/circlet-of-logos"}/>
                <StyledName>{artifact.name}</StyledName>
                {/* <StyledName>{enemy.title || "-"}</StyledName> */}

              </StyledBox>
            )}
          </div>
        </BorderLine>    
      </Container>
    </BgColor>
    </>
  );
}


export default ArtifactList;