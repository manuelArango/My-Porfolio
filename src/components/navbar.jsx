
import github from '../assets/icons/github.png'
import instagram from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import M from '../assets/icons/m.png'




import React, { useState, useEffect } from "react";


export function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState(null);



    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            let offsetTop = section.offsetTop;

            if (sectionId === 'Home') {
                // Ajusta el desplazamiento para la sección 'home' al inicio de la página
                offsetTop = 0;
            } else {
                // Ajusta la altura de la barra de navegación
                const navbarHeight = document.querySelector('.Navbar').offsetHeight; // Ajusta la clase de tu barra de navegación
                offsetTop -= navbarHeight;
            }

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // Lógica para determinar la sección actual en función del scroll
            // Asegúrate de ajustar los valores según la estructura de tu página

            const sectionOffsets = {
                Home: document.getElementById("Home").offsetTop,
                AboutMe: document.getElementById("AboutMe").offsetTop,
                Skills: document.getElementById("Skills").offsetTop,
                Projects: document.getElementById("Projects").offsetTop,
                // Agrega más secciones según sea necesario
            };
            const scrollPosition = window.scrollY;

            // Encontrar la sección actual
            const currentSection = Object.keys(sectionOffsets).find(
                (section) => scrollPosition < sectionOffsets[section]
            );

            setCurrentSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);



    return (
        <div>
            <div className="Navbar">
                
                <div className="Navbar-M">
                    <img className="Navbar-item Navbar-logo" src={M} alt="M" />
                </div>
                <div className="Navbar-items">

                    <h1 onClick={() => scrollToSection("Home")} className={`Navbar-item ocultar ${currentSection === "Home" ? "active" : ""}`}>Home</h1>
                    <h1 onClick={() => scrollToSection("AboutMe")} className={`Navbar-item ocultar ${currentSection === "AboutMe" ? "active" : ""}`}>About</h1>
                    <h1 onClick={() => scrollToSection("Skills")} className={`Navbar-item ocultar ${currentSection === "Skills" ? "active" : ""}`}>Skills</h1>
                    <h1 onClick={() => scrollToSection("Projects")} className={`Navbar-item ocultar ${currentSection === "Projects" ? "active" : ""}`}>Projects</h1>
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
                        <FontAwesomeIcon onClick={toggleSidebar} icon={faBars} className="burger-icon" />
                    </div>

                </div>
            </div>

            <div className={`side-bar ${sidebarOpen ? 'active' : ''}`}>
                <div className="side-bar-container">

                    <div className='X'>
                        <FontAwesomeIcon onClick={toggleSidebar} icon={faX} className="Close-sidebar" />

                    </div>
                    <h1 className="text-center ml-3 color1 Subtittle">Menu</h1>



                    <hr className="my-4 border-t-2 border-gray-300" />
                    <h1 onClick={() => scrollToSection("Home")} className="Navbar-item-sidebar ">Home</h1>
                    <h1 onClick={() => scrollToSection("AboutMe")} className="Navbar-item-sidebar ">About</h1>
                    <h1 onClick={() => scrollToSection("Skills")} className="Navbar-item-sidebar ">Skills</h1>
                    <h1 onClick={() => scrollToSection("Projects")} className="Navbar-item-sidebar ">Projects</h1>
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