import React from 'react'
import headshot from './headshot.png'
import './HeaderStyles.css'

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="headshot-image">
                    <img className="image" src={headshot} alt="image error" />
                </div>
                <div className="introduction">
                    <h1>Ryder Catonio</h1>
                    <p1>Welcome to my Personal Portfolio Website.</p1>
                </div>


            </div>
        </>
    )
}
