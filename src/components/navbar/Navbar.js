import React from 'react'
import './Navbar.css'

function Navbar() {
    return(
       <section className="section-navbar row">
           <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="activeLink" href="#">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="links" href="#">Repositories<span class="badge badge-light">12</span></a>
                </li>
                <li className="nav-item">
                    <a className="links" href="#">Projects<span class="badge badge-light">0</span></a>
                </li>
                <li className="nav-item">
                    <a className="links" href="#">Stars<span class="badge badge-light">7</span></a>
                </li>
                <li className="nav-item">
                    <a className="links" href="#">Followers<span class="badge badge-light">4</span></a>
                </li>
                <li className="nav-item">
                    <a className="links" href="#">Following<span class="badge badge-light">2</span></a>
                </li>
               
            </ul>
       </section>
    )
}

export default Navbar