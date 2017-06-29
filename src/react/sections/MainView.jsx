import React from 'react'

export default class MainView extends React.Component {

	render() {
		return (
			<div>

				<div className="main-section home">
					<h1 className="outlin headline">Hire A Princess!</h1>

					<div className="button-row">
						<button>Gallery</button>
						<button>Book Now</button>
					</div>

				</div>

				<div className="content-section">
					<div className="content-body">
						<h1>content-section 1</h1>
					</div>
				</div>

				<div className="content-section">
					<h1>content-section 2</h1>
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