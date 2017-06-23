import React from "react";
import Routes from "./Routes";
import Navbar from "./react/sections/common/Navbar";
import {initializeFirebase} from "./app-config";

export default class App extends React.Component {

	componentWillMount() {
		initializeFirebase()
	}

	render() {
		return (
			<div>
				<Navbar/>
				<Routes/>
			</div>
		)
	}
}