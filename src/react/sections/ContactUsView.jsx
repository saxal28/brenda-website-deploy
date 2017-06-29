import React from "react";
import {Card} from "./common/Card";
import {isMobile} from "../../util/mobileChecker";
// import {ContactForm} from "../forms/ContactForm";
// const form = new ContactForm();

export default class ContactUsView extends React.Component {

    // TODO == kick out into Contact Form

    state = { firstName: "", lastName: "", phoneNumber: "", email: "" }

	setContactInfo(field, value) {

	    let obj = {};
	    obj[field] = value;

		this.setState(obj);
	}

	sendContactEmail() {
        console.log(this.state)
    }

	render() {

        const {firstName, lastName, phoneNumber, email} = this.state;
        const sendContactEmail = this.sendContactEmail.bind(this);

        const form = [
            {label: "First Name", value: firstName, onChange: (e) => this.setContactInfo('firstName', e.target.value), type: "text"},
            {label: "Last Name", value: lastName, onChange: (e) => this.setContactInfo('lastName', e.target.value), type: 'text'},
            {label: "Telephone", value: phoneNumber, onChange: (e) => this.setContactInfo('phoneNumber', e.target.value), type: "text"},
            {label: "Email", value: email, onChange: (e) => this.setContactInfo('email', e.target.value), type: 'text'},
        ]

        const form2 = [
            {label: "Notes", value: firstName, onChange: (e) => this.setContactInfo('firstName', e.target.value), type: "textarea"},
        ]

		return (
			<div className="main-section contact">

                <h1>Contact Us</h1>

				<div className="card-row">
					<Card
						form={form}
                        color="transparentBlack"
					/>
				</div>

                <button onClick={sendContactEmail}>Send!</button>

            </div>
		)
	}
}