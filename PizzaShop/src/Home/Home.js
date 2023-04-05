import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Assets/pizza.jpeg'
import './Home.css'

function Home() {
  return (
    <div>
        <div className="Home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="Header">
            <h1>Peter's Pizzeria</h1><br/><br/><br/>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to="/Menu"> 
               <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home