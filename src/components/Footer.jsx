import React from 'react';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import wolf from '../assets/icons/wolf.png';

export function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="group-1">
                <div className="box">
                        <figure>
                            <a href="#">
                                <img src={wolf} alt="Wolf" />
                            </a>
                        </figure>
                    </div>
                    
                    <div className="box">
                        <h2>Contact Me</h2>
                        <p> (+57) 3152940376</p>
                        <p> manuelargo2004@gmail.com ​​​​​</p>
                    </div>
                    <div className="box socials-media">
                        <h2>Follow Me</h2>
                        <a className='social-media' href='https://www.instagram.com/manuel_arangoo22?igsh=dXB6MXg5bzV1cnph&utm_source=qr'>
                            <img src={instagram} alt="" />
                            <span className='Link'>@manuel_arangoo22</span>
                        </a>

                        <a className='social-media' href='https://www.linkedin.com/in/manuel-arango-gomez-5157b423a/'>
                            <img src={linkedin} alt="" />
                            <span>manuel-arango-gomez</span>
                        </a>
                    </div>
                </div>
                <div className="group-2">
                    <small>&copy; <script>document.write(new Date().getFullYear())</script> 2024 <b>Manuel</b> - All rights reserved</small>
                </div>
            </footer>
        </div>

    )
}

