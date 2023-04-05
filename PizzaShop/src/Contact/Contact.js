import React from 'react'
import './Contact.css'
import PizzaLeft from "../Assets/pizzaLeft.jpg"

const setAlt =(event) => {
    event.preventDefault();

    alert("Message Sent Successfully!!!")
}

function Contact() {
  return (
    <div className="Contact">
        <div
          className="Left"
          style={{backgroundImage: `url(${PizzaLeft})`}}
        ></div>
        <div className="Right">
            <h1> Contact Us</h1>

            <form onSubmit={setAlt}>
                <label>Full Name</label>
                <input name="name" placeholder="Enter Full Name..." type="text" />
                <label>Email</label>
                <input name="email" placeholder="Enter your Email..." type="email" />
                <label>Message</label>
                <textarea
                rows="6"
                placeholder="Enter your Message"
                name="message"
                required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact