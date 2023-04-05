import React from 'react'
import MultiplePizzas from "../Assets/multiplePizzas.jpeg";
import './About.css'

function About() {
  return (
    <div className="About">
        <div
          className="AboutTop"
          style={{backgroundImage: `url(${MultiplePizzas})`}}
        ></div>

        <div className="AboutBottom">
            <h1>ABOUT US</h1>
            <br/><br/>
            <p>
            A Our shop is a restaurant or a fast-food establishment that specializes in preparing and serving pizzas, 
            a popular Italian dish made of dough, tomato sauce, cheese, and various toppings. Most pizza shops offer a
             variety of pizza styles and sizes, including thin crust, deep dish, stuffed crust, and gluten-free options.
              Some pizza shops also serve other dishes such as salads, pasta, sandwiches, and desserts. Many pizza shops 
              offer both dine-in and take-out options, and some also offer delivery services. 
              Pizza shops may be independently owned and operated, or they may be part of a chain or franchise. 
              The atmosphere and style of a pizza shop can vary widely, from casual and family-friendly to upscale and trendy.
            </p>
        </div>
    </div>
  )
}

export default About
