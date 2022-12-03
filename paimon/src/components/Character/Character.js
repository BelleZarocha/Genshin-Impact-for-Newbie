import React ,{useState, useEffect }from "react";
import axios from "axios";

function Character() {
	const [characters, setCharacter] = useState([]);

	useEffect(() => {
		axios.get('https://api.genshin.dev/characters')
			.then(res => {
				console.log(res)
				setCharacter(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	})

	return (
		<div>
			<ul>
				{
					characters.map(character => <li key={index}>{character.name}</li>)
				}
			</ul>
		</div>
	);
}

export default Character;