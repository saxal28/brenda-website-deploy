import React from 'react';
import {Link} from "react-router-dom";


export default class MenuOverlay extends React.Component {
	render() {

		const { visible, toggleMenu } = this.props;

		return (
			<div>

				{visible &&
					<div className="overlay">
						<Link to="/" className="overlay-link" onClick={() => toggleMenu() }>Home</Link>
						<Link to="/gallery" className="overlay-link" onClick={() => toggleMenu() }>Gallery</Link>
						<Link to="/characters" className="overlay-link" onClick={() => toggleMenu() }>Characters</Link>
						<Link to="/cast" className="overlay-link" onClick={() => toggleMenu() }>Cast</Link>
						<Link to="/packages" className="overlay-link" onClick={() => toggleMenu() }>Packages</Link>
						<Link to="/book-party" className="overlay-link" onClick={() => toggleMenu() }>Book a Party</Link>
						<Link to="/contact-us" className="overlay-link" onClick={() => toggleMenu() }>Contact Us</Link>
					</div>
				}

			</div>
		)
	}
}