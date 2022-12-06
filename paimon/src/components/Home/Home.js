import React, { useEffect, useState } from "react";
// import "../StylesPages/ShowListStyled"
import { Container, BgColor, BorderLine, RarityBox, StyledImg, StyledName } from "../StylesPages/PageLayout"
import NOW from "../../Now.jpg";
import NEW from "../../New.jpg"; 

function Home() {  
  return (
    <BgColor>
      <Container>
      <BorderLine style={{background:"#e4c179", height: "6vmax"}}>
          <div>
            <a style={{textDecoration:"none"}} href="https://genshin.hoyoverse.com/pc-launcher/?utm_source=SEA_google_SEAT2_performancemax_20220626&mhy_trace_channel=ga_channel&new=1&gclid=Cj0KCQiAyracBhDoARIsACGFcS6k402mEnaxf1658gjV7uUnT9HNu8-VWRlmW3lCGOSoOvWJ5sspY48aAtjHEALw_wcB#/GI008"><h1 style={{color:"#000"}}>Start to play Genshin Impact</h1></a>
          </div>
        </BorderLine>
        <br/>
        <div style={{display:"flex", justifyContent:"center", margin: "20px"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6jY2f6OkpBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        <br />  
        <BorderLine style={{display: "block", textAlign: "center"}}>
          <h1 h1 style={{color:"#e4c179", marginBottom:"20px"}}>Update!!</h1>
          <img src={NEW} style={{height:"15vmax"}}/>
          <p><b>Version 3.3</b> "All Senses Clear, All Existence Void" Maintenance</p>
          <br />
          <p>(All Servers) Starts to play tomorrow</p>
          <br />
        </BorderLine>
        <br/>
        <BorderLine style={{display: "block", textAlign: "center"}}>
          <h1 h1 style={{color:"#e4c179", marginBottom:"20px"}}>Current Events</h1>
          <img src={NOW} style={{height:"15vmax"}}/>
          <p>From November 18, 2022 to December 06, 2022</p>
          <br />
          <p>(14 hours remaining)</p>
          <br />
        </BorderLine>
      </Container>
    </BgColor>
  )
}

export default Home
