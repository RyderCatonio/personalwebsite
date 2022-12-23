import React from 'react'
import "./navbarstyles.css"

export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li >
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/">Resume</a>
                </li>
            </ul>

        </nav>
    )
}