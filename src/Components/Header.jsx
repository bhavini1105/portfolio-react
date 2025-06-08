import React from 'react'
import { Link } from 'react-router'

function Header() {
    return (
        <>

            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <Link class="navbar-brand" to="/">BHAVINI</Link>
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><Link class="nav-link" to="/">HOME</Link></li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">ABOUT</Link>
                            </li>
                            <li class="nav-item"><Link class="nav-link" to="/skills">SKILLS</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/education">EDUCATION</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/projects">PROJECTS</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
