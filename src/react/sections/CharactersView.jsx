import React from "react";
import CharacterCard from "./common/CharacterCard";

const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in justo in nunc fringilla eleifend. Proin nec orci at nisi elementum feugiat ac sed quam. Maecenas ut faucibus metus. Quisque ut tellus eu neque vestibulum malesuada. Ut feugiat vestibulum ullamcorper. Sed et elit nulla. Cras eget dolor vel mi feugiat vehicula. Suspendisse id consectetur risus, vitae dictum mauris. Proin eu purus luctus, blandit purus nec, pellentesque nulla. Cras commodo mauris est, sit amet ultricies justo dictum eget."

export default class CharactersView extends React.Component {
	render() {
		return (
			<div>
				<CharacterCard
					title="Princess 1"
					body={body}
					image="https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19184291_10209781556151319_2064978390_n.jpg?alt=media&token=074ea8e7-f550-4297-9989-1fa3593f6f58"/>
				<CharacterCard
					title="Princess 2"
					body='Nam risus nisi, efficitur at ante et, porttitor congue libero. Pellentesque nunc nisl, malesuada rutrum egestas ac, scelerisque sed elit. '
					image="https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19184291_10209781556151319_2064978390_n.jpg?alt=media&token=074ea8e7-f550-4297-9989-1fa3593f6f58"/>
				<CharacterCard
					title="Princess 3"
					body='Nam risus nisi, efficitur at ante et, porttitor congue libero.'
					image="https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19184291_10209781556151319_2064978390_n.jpg?alt=media&token=074ea8e7-f550-4297-9989-1fa3593f6f58"/>
				<CharacterCard
					title="Princess 4"
					body={body}
					image="https://firebasestorage.googleapis.com/v0/b/brenda-website.appspot.com/o/19184291_10209781556151319_2064978390_n.jpg?alt=media&token=074ea8e7-f550-4297-9989-1fa3593f6f58"/>
			</div>
		)
	}
}