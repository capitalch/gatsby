import React, { Fragment, useState } from 'react';
import { useGallary } from '../../hooks/gallary-hook';
import Img from 'gatsby-image';
import contactsJson from '../../gallaries/contacts/contacts.json';
import styles from './contacts.module.scss';
import axios from 'axios';
import settings from '../../settings.json';

function Contact() {
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const { allImagesFixed } = useGallary('contacts');

	const resetForm = () => {
		setName("");
		setMobile("");
		setEmail("");
		setMessage("");
	}

	const sendEmail = (evt) => {
		evt.preventDefault();
		const data = {
			subject: settings.subject,
			text: 'From: '.concat(email, '\r\n', 'Name: ', name, '\r\n', 'Mobile: ', mobile, '\r\n', 'Message: ', message)
		};

		axios.post(settings.emailHost, data)
			.then((res) => resetForm())
			.catch(err => console.log(err));
	}

	function getDisplayContact(contact: any, index: number) {
		const temp = <div key={index} className={styles.employeeContainer}>
			<div className={styles.image}>
				<Img fixed={allImagesFixed[contact.image]}></Img>
			</div>
			<div className={styles.content}>
				<div className={styles.name}>{contact.name}</div>
				<div className={styles.designation}>{contact.designation}</div>
				<div className={styles.email}>{contact.email}</div>
				<div className={styles.mobile}>{contact.mobile}</div>
			</div>
		</div>
		return temp;
	}

	return <div className={styles.contactContainer}>
		<div className={styles.contactDetailsForm}>
			<div className={styles.contactDetails}>
				<div className={styles.details}>
					<div><span>Address -</span> 12, Jawaharlal Nehru Rd, Ground floor and 1st floor, Esplanade, Dharmatala, Taltala, Kolkata, West Bengal 700013</div>
					<div><span>Email -</span> capitalch@gmail.com</div>
					<div><span>Phone -</span> 033-22285232, 033-22285233, 033-22285857, 033-22280608</div>
				</div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4406316220625!2d88.34917891495937!3d22.562617485187904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7028ec8fd67d05df!2sCapital+Chowringhee+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1559300145905!5m2!1sen!2sin"></iframe>
			</div>
			<div className={styles.contactForm}>
				<form onSubmit={sendEmail}>
					<table className={styles.contactTable}>
						<tbody>
							<tr>
								<td>
									<label>Name <span className={styles.highlight}>*</span></label>
								</td>
								<td>
									<input type="text" required name="name" value={name} onChange={e => setName(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Mobile <span className={styles.highlight}>*</span></label>
								</td>
								<td>
									<input type="text" pattern="[0-9]*" required name="mobile" minLength={10} maxLength={10} value={mobile} onChange={e => setMobile(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Email <span className={styles.highlight}>*</span></label>
								</td>
								<td>
									<input type="email" required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" value={email} onChange={e => setEmail(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Message</label>
								</td>
								<td>
									<textarea rows={6} name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
								</td>
							</tr>
							<tr>
								<td colSpan={2}>
									<button type="submit" className="mailButton">Contact</button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
				<div className={styles.notes}> Fields marked with <span className={styles.highlight}>*</span> are required</div>
			</div>
		</div>
		<div className={styles.contactPersons}>
			{
				contactsJson.map((contact: any, index: number) => {
					return getDisplayContact(contact, index);
				})
			}
		</div>
	</div>
}

export default Contact;

