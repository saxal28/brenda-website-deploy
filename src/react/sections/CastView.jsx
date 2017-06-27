import React from "react";
import {Card} from "./common/Card";

export default class CastView extends React.Component {
	render() {
		return (
			<div className="main-section cast">
				<h1>The Cast</h1>
				<div className="card-row">

					{content.map(actor => {
						return (
							<Card
								title={actor.name}
								image="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg"
								body="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg"
							/>
						)
					})}

				</div>
			</div>
		)
	}
}


const content = [
	{name: 'Brenda Bass', roles: "All", bio: "bio", image: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg"},
	{name: 'Steve Smith', roles: "Shrek", bio: "bio", image: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg"},
	{name: 'Alan Sax', roles: "Developer, Designer, Graphic Artist", bio: "bio", image: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg"},
]