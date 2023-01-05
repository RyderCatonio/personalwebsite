import React from 'react'
import headshot from './headshot.png'
import './HeaderStyles.css'
import Contacts from '../SocialMedia/Contacts.js'

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="headshot-image">
                    <img className="image" src={headshot} alt="image error" />
                </div>
                <div className="introduction">
                    <h1><span>Ryder Catonio</span></h1>
                    <p1>Welcome to my personal portfolio website, where you can explore my work and learn more about me!
                    </p1>
                </div>
            </div>
        </>
    )
}
