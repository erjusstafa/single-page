import React from 'react'
import './Home.css'
import Team from '../team/Team'
import Contact from '../contacts/Contact'
import Service from '../services/Service'
import Copyrigt from '../copyright/Copyrigt'


export default function Image() {

    return (
        <>
        <nav>
            <div className="img1" id="home">
                <h1>WE ARE POWERFUL SOFTWARE COMPANY</h1>
                <p>Think smart, invent the future and promote creativity</p>
            </div>

           <Service/>
            <Team />
            <Contact />
            <Copyrigt />

            <div className="img3">
                <h4>We are a team profesionals ad our moto is :</h4>
                <h1 className="p" style={{color:"white"}}>Think smart, invent the future and promote creativity</h1>
            </div>
            </nav>
        </>
    )
}

