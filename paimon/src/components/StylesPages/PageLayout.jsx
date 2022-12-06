import styled from "styled-components";

export const Container = styled.div `
    padding: 3rem 2rem;
    max-width: 960px;
    margin: 0 auto;
`

export const BgColor = styled.div `
    background: #22242d;
    height: 100%;
`

export const StyledBox = styled.div `
    height: 300px;
    width: 200px;
    display: block;
    text-align: center;
    padding: 10px;
    background: #e4c179;
    margin: 5px;
    cursor: pointer;
`

export const BorderLine = styled.div `
    border: 5px solid #e4c179;
    border-radius: 20px;
` 

export const RarityBox = styled.div `
    height: 310px;
    width: 200px;
    display: block;
    text-align: center;
    padding: 10px;
    background: ${props => (props.rarity == 5 ? "#fdc43f" : "#682a92")} !important;
    box-shadow: ${props => (props.rarity == 5 ? "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff185, 0 0 20px #fff185" : "")};
    margin: 8px;
    cursor: pointer;
`

export const StyledImg = styled.img `
    heigh: 150px;
    width: 150px;
    position: relative;
`

export const StyledName = styled.div `
    border-radius: 5px;
    height: 25px;
    width: 100%;
    bottom: 0;
    background: #fff;
    margin: 5px;
`

export const CharacterImg = styled.img `
    height: 30vmax;
    margin: 20px;
`