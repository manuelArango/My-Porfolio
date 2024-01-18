
import github from '../assets/icons/github.png'
import instagram from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from "react"
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import M from '../assets/icons/m.png'




export function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div>
            <div className="Navbar">
                <div className="Navbar-M">
                    <img className="Navbar-item Navbar-logo" src={M} alt="M" />
                </div>
                <div className="Navbar-items">
                    <h1 className="Navbar-item ocultar" > Home </h1>
                    <h1 className="Navbar-item ocultar" > About </h1>
                    <h1 className="Navbar-item ocultar" > Skills </h1>
                    <h1 className="Navbar-item ocultar" > Projects </h1>
                    <a href="https://github.com/Manuel220104">
                        <img className="Navbar-icon ocultar" src={github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/manuel-arango-gomez-5157b423a/">
                        <img className="Navbar-icon ocultar" src={linkedin} alt="Linkedin" />
                    </a>
                    <a href="https://www.instagram.com/manuel_arangoo22?igsh=dXB6MXg5bzV1cnph&utm_source=qr">
                        <img className="Navbar-icon ocultar" src={instagram} alt="Instagram" />
                    </a>

                    <div className="burguer">
                        <FontAwesomeIcon onClick={toggleSidebar} icon={faBars}  className="burger-icon" />
                    </div>

                </div>
            </div>

            <div className={`side-bar ${sidebarOpen ? 'active' : ''}`}>
                <div className="side-bar-container">

                    <div className='X'>
                        <FontAwesomeIcon onClick={toggleSidebar} icon={faX} className="Close-sidebar" />

                    </div>
                    <span className="text-center ml-3 color1 Subtittle">Menu</span>




                    <hr className="my-4 border-t-2 border-gray-300" />
                    <h1 className="Navbar-item-sidebar" > Home </h1>
                    <h1 className="Navbar-item-sidebar" > About </h1>
                    <h1 className="Navbar-item-sidebar" > Skills </h1>
                    <h1 className="Navbar-item-sidebar" > Projects </h1>
                    <div>
                        <a href="https://github.com/Manuel220104">
                            <img className="Navbar-icon-sidebar" src={github} alt="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/manuel-arango-gomez-5157b423a/">
                            <img className="Navbar-icon-sidebar" src={linkedin} alt="Linkedin" />
                        </a>
                        <a href="https://www.instagram.com/manuel_arangoo22?igsh=dXB6MXg5bzV1cnph&utm_source=qr">
                            <img className="Navbar-icon-sidebar" src={instagram} alt="Instagram" />
                        </a>
                    </div>


                </div>


            </div>

        </div>



    )
}