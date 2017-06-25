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
					<h4>footer info</h4>
				</div>

			</div>
		)
	}
}