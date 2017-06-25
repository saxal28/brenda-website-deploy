import React from 'react';
import {isMobile} from "../../../util/mobileChecker";

export default class CharacterCard extends React.Component {

    render() {

        const mobile = isMobile() ? "mobile" : "";
        const {title, image, body} = this.props

        return (
            <div className={`character-card ${mobile}`}>
                <img className="character-card-image" src={image} />
                <div className="character-card-content">
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}