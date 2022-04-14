import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark  py-2">
            <Link to="/" className="navbar-brand ml-5">React Redux Contact App</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="navbar-brand ml-5"></Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Navigation
    