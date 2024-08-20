import React from "react";
import emailjs from "@emailjs/browser";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaYoutube, FaDribbble
} from "react-icons/fa";
import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import "./contact.css"
const Contact = () => {
    
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: '',
        subject: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_nyiiywh",
                "template_c74o3hh",
                {
                    from_name: form.name,
                    to_name: "vivek",
                    email: form.email,
                    to_email: "vivekverma942003@gmail.com",
                    subject:form.subject,
                    message: form.message,
                },
                "6BQBuYus3R3-Tr3Dz"
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                        subject:"",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );



    }















    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>
            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">
                        Don't be shy !
                    </h3>
                    <p className="contact__description">
                        Feel free to get in touch with me. I am always open to discussing
                        new projects, creative ideas or opportunities to be part your visions.
                    </p>
                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />
                            <div>
                                <span className="info__title">Mail Me</span>
                                <h4 className="info__desc">vivekverma942003@gmail.com</h4>
                            </div>
                        </div>
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />
                            <div>
                                <span className="info__title">Call me</span>
                                <h4 className="info__desc">8840432962</h4>
                            </div>
                        </div>
                    </div>
                    <div className="contact__social">
                        <a className="contact__social-link" href="https://facebook.com">
                            <FaFacebookF className="info__icon" />
                        </a>
                        <a className="contact__social-link" href="https://twitter.com">
                            <FaTwitter className="info__icon" />
                        </a>
                        <a className="contact__social-link" href="https://youtube.com">
                            <FaYoutube />
                        </a>
                        <a className="contact__social-link" href="https://dribbble.com">
                            <FaDribbble />
                        </a>
                    </div>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input className="form__control" type="text" name="name" value={form.name}
                                onChange={handleChange} placeholder="Your Name" />
                        </div>
                        <div className="form__input-div">
                            <input className="form__control" type="email" name="email" value={form.email}
                                onChange={handleChange} placeholder="Your E-mail" />
                        </div>
                        <div className="form__input-div">
                            <input className="form__control" type="subject" placeholder="Your Subject"
                                value={form.subject}
                                name="subject"
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form__input-div">
                        <textarea placeholder="Your Message" className="form__control textarea"
                            value={form.message}
                            name="message"
                            onChange={handleChange} />
                    </div>
                    <button className="button">
                        {loading ? "Sending..." : "Send"}
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    )
}
export default Contact;