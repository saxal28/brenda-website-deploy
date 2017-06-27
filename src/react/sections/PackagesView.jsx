import React from "react";
import {Card} from "./common/Card";

export default class PackagesView extends React.Component {
	render() {
		return (
			<div className="main-section packages">
				<h1>Packages</h1>

				<div className="card-row">
					<Card color="blue" title="Package 1"/>
					<Card color="red" title="Package 2"/>
					<Card color="limegreen" title="Package 3"/>
				</div>

			</div>
		)
	}
}