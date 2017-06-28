import React from "react";
import {Card} from "./common/Card";
import {ContactForm} from "../forms/ContactForm";

const form = new ContactForm();

export default class ContactUsView extends React.Component {

	setContactInfo(field, value) {
		form.setContactInfo()
	}

	render() {

        const form = [
            {label: "Label 1", value: this.state.test, onChange: (e) => this.setContactInfo('firstName', e.target.value)}
        ]

		return (
			<div className="main-section contact">
				<div className="card-row">
					<Card
						form={form}
					/>
				</div>
			</div>
		)
	}
}