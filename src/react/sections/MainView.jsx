import React from 'react'
import {isMobile} from "../../util/mobileChecker";

export default class MainView extends React.Component {

	render() {

		return (
			<div>

				<div className="main-section home">
					<h1 className="outlin headline">Hire A Princess <br /> for Your Next Party!</h1>

					<div className="button-row">
						<button>Gallery</button>
						<button>Book Now</button>
					</div>

				</div>

				<div className="content-section">
					<div className="content-body">
						<h1>Really Exciting Title</h1>
						{!isMobile() && <img className="positioned-image left" src="https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19182183_10209781595752309_1594056582_o.jpg?alt=media&token=97118fd0-a1a6-4e41-8dc9-aca1053edbcd" />}
					</div>
				</div>

				<div className="content-section">
					<h1>Another Exciting Title</h1>
					<h3>Maybe more pictures... ;)</h3>
				</div>

				<div className="footer-section">
					<div className="footer-content">

						<div className="social-media-bar">
							<div className="facebook" />
							<div className="twitter" />
							<div className="instagram" />
						</div>

						<h4>Have Questions?</h4>
						<p>Email Us At: <br /> saxal28@gmail.com</p>
						<p>Call Us at: <br /> 555-555-5555</p>
						<p><span className="link">Book A Party</span> with us</p>
						<p><span className="link">Request more information</span></p>
					</div>
				</div>

			</div>
		)
	}
}