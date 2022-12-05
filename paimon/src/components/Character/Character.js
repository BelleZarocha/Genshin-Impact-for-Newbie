import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../StylesPages/PageLayout";
import { CharacterBox, CharacterImg, CharacterName } from "../Characterslist/CharacterListStyled"

const charactersURL = 'https://api.genshin.dev/characters/';

const Character = ({ characters, setCharacters }) => {
	// Grab the characters 
	const characterName = useParams().characterName;
	
	console.log(characterName);
	useEffect(() => {
		const url = `${charactersURL}${characterName}/icon-big`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let characterImg = res.bpi[characterName];
				setCharacters(characterImg);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	console.log(characters);

	return (
		<div>
			<h1>Genshin Impact Characters</h1>
			<div>{characters}</div>
		</div>
	);
};

export default Character;



// function Character() {
//     const Characters = ({characters, setCharacters}) => {
// 		const characterName = useParams().characterName;
// 		console.log(characterName);
// 	}
	
	
	
	
	
// 	// const [characters, setCharacter] = useState([]);
//     // // fetch api
//     // async function getCharacters() {
//     //   const res = await fetch("https://api.genshin.dev/characters");
//     //   res
//     //   .json()
//     //   .then (res => setCharacter(res))
//     //   .catch (err => console.log(err))
//     // }
//     // useEffect (()=> {
//     //   getCharacters();
//     // },[])
  
//     // return (
//     //   <>
//     //     <Container>
//     //       <h1>Genshin Characters</h1>

//     //       {/* map character list from api and set them to capitalize the first letter */}
//     //       {characters.map(character => 
//     //         <CharacterBox>
//     //         <CharacterImg src="https://api.genshin.dev/characters/lisa/icon-big"/>
//     //           <CharacterName>{character.charAt(0).toUpperCase() + character.slice(1)}</CharacterName>
//     //         </CharacterBox> 
//     //       )}
          
          
              
               
          
//     //     </Container>
//     //   </>
//     // );
//   }
  
//   export default Character;
  