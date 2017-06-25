import React from "react";

import { Route } from 'react-router-dom';
import CharactersView from "./react/sections/CharactersView";
import MainView from "./react/sections/MainView";
import ContactUsView from "./react/sections/ContactUsView";
import BookPartyView from "./react/sections/BookPartyView";
import CastView from "./react/sections/CastView";
import PackagesView from "./react/sections/PackagesView";
import GalleryView from "./react/sections/GalleryView";
import GalleryListView from "./react/sections/GalleryListView";


export default class Routes extends React.Component {

	render() {
		return (
			<div>
				<Route exact path="/" component={MainView} />
				<Route path="/gallery" component={GalleryView} exact/>
				<Route path="/gallery/all" component={GalleryListView} exact />
				<Route path="/characters" component={CharactersView}/>
				<Route path="/cast" component={CastView}/>
				<Route path="/packages" component={PackagesView}/>
				<Route path="/book-party" component={BookPartyView} />
				<Route path="/contact-us" component={ContactUsView}/>
			</div>
		)
	}
}