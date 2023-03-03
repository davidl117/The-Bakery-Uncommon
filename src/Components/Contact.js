import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; 
import emailjs from '@emailjs/browser';


export default function Contact() {

    const[submitted, setSubmitted] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nx5586o', 
                         "template_7ksyypc", 
                         form.current,
                         "c201KRp5LjlfqLZok")
        .then((result) => {
            console.log("message sent");
         }, (error) => {
                console.log(error);
        });
        setSubmitted(prevSubmit => !prevSubmit)
            alert("Message Submitted")
            console.log(submitted);
        } 

     const styles = {
        display: submitted ? "none" : ""
    }
        
    const handleSubmit = () => {
         return (
            "Thanks! I'll be in touch ASAP!"
         )
    }

    return (
        <div className="contact-container">
            <h1>{submitted ? "Thanks! I'll be in touch ASAP!": "Get in touch with me"}</h1>
            <form 
                  className="form-container"
                  ref={form}
                  onSubmit={sendEmail}
                  style={styles}
                //   target="_blank"
            >
                <input 
                    type="text"
                    placeholder="Name here..."
                    name="user_name"
                    required 
                />
                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
                <textarea 
                    placeholder="Your message here..."
                    name="message"
                    rows={7}
                    required
                />
                <input className="submit" type="submit" value="Submit Form" onClick={handleSubmit} />
            </form>
            <div className="return-home-submit">
            {submitted ? <Link to="/">Return to Home</Link> : ""}
            </div>
        </div>
    )
}