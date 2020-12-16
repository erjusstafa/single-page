import React from 'react'
import './Service.css'
import {HiLightBulb} from 'react-icons/hi';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import BuildIcon from '@material-ui/icons/Build';
import Typography from '@material-ui/core/Typography';

function About() {
    return (
        
            <div className="background-2" id="service">
                <h5>THIS IS WHAT WE DO BEST</h5>

                <div className="columnn">

                    <div className="col-1">
                        <Typography>
                        <HiLightBulb style={{fontSize : "60"}} className="icon"/>
                        <div className="inovat">INNOVATION</div>
                        <div className="p1">We care about every detail, use the best relationship
                         between creativity and intelligence to bring our ideas to life. 
                          We have greater ability to customize any features outside of the standard settings in the most innovative .
                          </div>
                        </Typography>
                        </div>

                        <div className="col-2">
                        <Typography>
                        <LanguageIcon style={{fontSize : "60"}} className="icon"/>
                        <div className="design">WEB DESIGN</div>
                        <div className="p1">Inovacion has enough capacities and experienced web developers to create
                         a feature-rich website of any complexity and scalability. Get your custom web solution with 
                         the newest software development technologies!
                          </div>
                        </Typography>
                        </div>


                        <div className="col-3">
                        <Typography>
                        <PhoneIphoneIcon  style={{fontSize : "60"}} className="icon"/>
                        <div className="mobile">MOBILE APPS</div>
                        <div className="p1">Mobile application development has never been as tangible as with Inovacion. Today we are well-known mobile 
                        software developers who create a mobile app experience that taps into your audience and grows your business.
                          </div>
                        </Typography>
                        </div>


                        <div className="col-4">
                        <Typography>
                        <BuildIcon  style={{fontSize : "60"}} className="icon"/>
                        <div className="suport">TECNIC SUPPORT</div>
                        <div className="p1">Our developers manage these platforms to ensure that they are always functioning correctly and efficiently. 
                        High quality support to all our customers via real-time chat, 
                        trouble ticketing and dialing. </div>
                        </Typography>
                        </div>

                </div>

            </div>

    )
}

export default About
