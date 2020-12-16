import React, { useState } from 'react'
import './Contact.css'
import CallIcon from '@material-ui/icons/Call';
import { Typography } from '@material-ui/core';
import {Button} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Location from '../location/Location';

import { Link } from 'react-router-dom'


export default function Contact() {

    const [values, setValues] = useState({ email: '' })

    const handleDefault = (e) => {
        e.preventDefault()
    }


    const sms = () => {
        if (values.email) {
            alert("You subscride this blog!")
        }
    }


    return (
        <>
            <div className="footer" id="contact">

                <Typography className="sms" style={{ fontWeight: 'bold', fontSize: '30px' }}>
                    Contact US
                 </Typography>
                <div className="call"><CallIcon style={{ fontSize: 'medium' }} /> +355 69 774 3029</div>
                <div className="email"><EmailIcon style={{ fontSize: 'medium' }} /> erjus.stafa@gmail.com</div>
                <Link to={'https://www.google.com/maps/place/Shijak,+Shqip%C3%ABria/@41.3456603,19.5581961,15z/data=!3m1!4b1!4m5!3m4!1s0x134fd7dfa02075c3:0x28fef50004c7595f!8m2!3d41.3458989!4d19.5657349'}
                    className="loc"><LocationOnIcon style={{ fontSize: 'medium' }} /> Address : Shijak, ALBANIA</Link>

                <div className="social-media">
                    <Link to={'https://www.instagram.com'} target='_blank' aria-label='instagram'><InstagramIcon style={{title:"insta"}} /></Link>
                    <Link to={'https://www.linkedin.com/'} target='_blank' aria-label='instagram'><LinkedInIcon /></Link>
                    <Link to={'https://github.com/'} target='_blank' aria-label='Github'><GitHubIcon /></Link>
                </div>

                <Typography className="subscribe" style={{ fontSize: '30px', fontWeight: 'bold' }}>
                    SUBSCRIBE TO BLOG VIA EMAIL
                        <div className="enter-email" style={{ fontSize: '15px' }}>Enter your email address to subscribe to this blog.</div>
                </Typography>
                <form className="frm" onSubmit={handleDefault}>
                    <input className="input" type="email" placeholder="example@gmail.com" required
                        value={values.email}
                        onChange={e => setValues({ ...values, email: e.target.value })} />
                    <Button className="submit" style={{backgroundColor : 'rgb(60, 179, 113)' , borderRadius:'10px'}} variant="contained" color="primary" type="submit" onClick={sms}> Subscride</Button>
                </form>


                <Typography className="location" >                    
                    </Typography>
                <div className="description">We are a modern digital company that works
                to build growth business processes for small and medium-sized companies, with a high return on sales.
                    </div>


                <Location />

            </div>
        </>
    )
}
