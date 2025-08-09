import React, { useState } from "react";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        setIsMenuOpen(false); // Close menu when a link is clicked
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <div className="navbar-container">
                {/* Hamburger Menu Button - Positioned on the right */}
                <button 
                    className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} 
                    type="button" 
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Navigation Menu - Positioned on the right */}
                <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a 
                                className={`nav-link font-weight-bolder ${activeLink === "home" ? "active" : ""}`} 
                                href="#home"
                                onClick={() => handleLinkClick("home")}
                            >
                                HOME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className={`nav-link font-weight-bolder ${activeLink === "about_me" ? "active" : ""}`} 
                                href="#about_me"
                                onClick={() => handleLinkClick("about_me")}
                            >
                                ABOUT ME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className={`nav-link font-weight-bolder ${activeLink === "education" ? "active" : ""}`} 
                                href="#education"
                                onClick={() => handleLinkClick("education")}
                            >
                                EDUCATION
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className={`nav-link font-weight-bolder ${activeLink === "expertise" ? "active" : ""}`} 
                                href="#expertise"
                                onClick={() => handleLinkClick("expertise")}
                            >
                                EXPERTISE
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;