import React from 'react';
import MenuOverlay from "./MenuOverlay";
import {isMobile} from "../../../util/mobileChecker";
import {NavLink} from "react-router-dom"

export default class Navbar extends React.Component {

	state = { visible: false }

	toggleMenuOverlay() {
		this.setState({visible: !this.state.visible})
		console.log('called')
	}

	render() {

		const {visible} = this.state;
		const toggleMenuOverlay = this.toggleMenuOverlay.bind(this)

		return (
			<div className="menu">
				<div className="navbar">

					{isMobile() && <i className="fa fa-home" onClick={() => toggleMenuOverlay()}></i>}

					{!isMobile() && <div className="nav-links">
						<NavLink className="nav-link" to="/" activeClassName="active-link" exact>Home</NavLink>
						<NavLink className="nav-link" to="/gallery/all" activeClassName="active-link">Gallery</NavLink>
						<NavLink className="nav-link" to="/characters" activeClassName="active-link">Characters</NavLink>
						<NavLink className="nav-link" to="/cast" activeClassName="active-link">Cast</NavLink>
						<NavLink className="nav-link" to="/packages" activeClassName="active-link">Packages</NavLink>
						<NavLink className="nav-link" to="/book-party" activeClassName="active-link">Book Party</NavLink>
						<NavLink className="nav-link" to="/contact-us" activeClassName="active-link">Contact</NavLink>
					</div> }

					{/*<div className="nav-logo">*/}
						{/*<img src="http://i.imgur.com/MhYhnGk.png" />*/}
					{/*</div>*/}

				</div>
				<MenuOverlay visible={visible} toggleMenu={toggleMenuOverlay}/>
			</div>
		)
	}
}