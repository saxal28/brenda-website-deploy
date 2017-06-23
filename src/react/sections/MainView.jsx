import React from 'react'

export default class MainView extends React.Component {

	render() {
		return (
			<div>

				<div className="main-section">
					<h1 className="outline">Main Text</h1>
				</div>

				<div className="content-section">
					<div className="content-body">
						<h1>content-section 1</h1>
						<p>this is text</p>
					</div>
				</div>

				<div className="content-section">
					<h1>content-section 1</h1>
				</div>

			</div>
		)
	}
}