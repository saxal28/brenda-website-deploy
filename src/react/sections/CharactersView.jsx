import React from "react";
import {Card} from "./common/Card";

export default class CharactersView extends React.Component {
	render() {
		return (

			<div className="main-section characters">

				<h1>Characters</h1>

				<div className="card-row">

                    {characters.map((character, index) => {
                        return (
							<Card
								key={index}
								title={character.title}
								image={character.image}
								body={character.title}
							/>
                        )
                    })}

				</div>
			</div>
		)
	}
}

const characters = [
	{title: "Cinderella", bio: "bio", image: 'https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19182183_10209781595752309_1594056582_o.jpg?alt=media&token=97118fd0-a1a6-4e41-8dc9-aca1053edbcd'},
	{title: "Princess 2", bio: "bio", image: 'https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19184291_10209781556151319_2064978390_n.jpg?alt=media&token=074ea8e7-f550-4297-9989-1fa3593f6f58'},
	{title: "Wow", bio: "bio", image: 'https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19191160_10209781556391325_358432533_n.jpg?alt=media&token=c8beb260-2e6b-4d4e-82b6-025eb22ec226'},
    {title: "Cinderella", bio: "bio", image: 'https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19197481_10209781592632231_1189914215_o.jpg?alt=media&token=db6f1c54-114e-4430-b6f8-35cd0c77d491'},
	{title: "Princess 2", bio: "bio", image: 'https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19204704_10209781591912213_201977681_o.jpg?alt=media&token=0b457ea5-408e-4a99-96f6-093ee63d4539'},
	{title: "Wow", bio: "bio", image: 'https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19213009_10209781556791335_1013555707_o.jpg?alt=media&token=586e18aa-2b3d-4b85-9675-c20112569d3b'},
]
