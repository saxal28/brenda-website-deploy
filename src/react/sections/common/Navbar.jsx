import React from 'react';
import MenuOverlay from "./MenuOverlay";
import {isMobile} from "../../../util/mobileChecker";

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

					{true && <i onClick={() => toggleMenuOverlay()} className="fa fa-bars" aria-hidden="true"></i>}

					{/*{!isMobile() && <div className="nav-links">*/}
						{/*<div className="nav-link">Gallery |</div>*/}
						{/*<div className="nav-link"> Characters |</div>*/}
						{/*<div className="nav-link"> Cast |</div>*/}
						{/*<div className="nav-link"> Packages |</div>*/}
						{/*<div className="nav-link"> Book Party |</div>*/}
						{/*<div className="nav-link">Contact</div>*/}
					{/*</div> }*/}

				</div>
				<MenuOverlay visible={visible} toggleMenu={toggleMenuOverlay}/>
			</div>
		)
	}
}