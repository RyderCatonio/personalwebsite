import React from 'react'
import "./aboutstyles.css"
import profilepic from './profilepic3.png';

export default function About() {
    return (
        <div className="aboutSec">
            <h1 className="fullName">Ryder Catonio</h1>
            <div className="aboutInfo">
                <p className="aboutParagraph">
                    Hi, I'm <strong>Ryder Catonio</strong> and I am a Computer Science student at the University of Alberta.
                    My focus is on Full Stack web development, security and networks, and algorithms.
                    I am always seeking opportunities to learn and enhance my skills in these areas.
                    In my free time, I enjoy staying active through activities such as working out and hiking.
                    I also enjoy using my spare time to develop personal applications and learn new technologies, as well as playing video games.
                </p>
                <img className="profilepicture" src={profilepic} alt="" />
            </div>


        </div>
    )
}
