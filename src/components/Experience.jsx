import Acentos from "../assets/images/Acentos.png"
import BotellasAmorAdmin from "../assets/images/BotellasAmorAdmin.png"
import BotellasAmorAdminAnalisis from "../assets/images/BotellasAmorAdminAnalisis.png"
import BotellasAmorApp from "../assets/images/BotellasAmorApp.png"




export function Experience() {

    return (

        <div id="Projects" className="Projects-Container">
            <div className="Text-Container-Projects">
                <div>
                    <h2 className="Subtittle2"> My Experience</h2>
                </div>
                <div>
                    <div className="ProjectContainer">
                        <h2 className="Subtittle-Project">Ecommerce - AcentosApp</h2>
                        <h3 className="Text-Projects">Ever wanted to explore the fantastic world of books at EAFIT University's Acentos Library? 📚 But wait, there's no online platform to make your book-hunting easier! 😩 Fret not! We're here to save the day with a brilliant web application. 🌐💻 With AcentosPage, you can dive into the treasure trove of discounted books and materials, browse, buy, and have them delivered right to your doorstep! 🚚📦</h3>
                        <a className="Link" href="https://github.com/Manuel220104/Integrative-Project-1">Github Repository</a>
                        <img className="Project-Image1" src={Acentos}/>
                    </div>
                    <div className="ProjectContainer">
                        <h2 className="Subtittle-Project">Botellas de Amor App</h2>
                        <h3 className="Text-Projects">🌍✨ Embark on a journey towards sustainability with Botellas de Amor! 📱💚 This innovative mobile app is revolutionizing how we engage with recycling ♻️, introducing you to the incredible world of Ecobricks. 🧱🌱</h3>
                        <a className="Link" href="https://github.com/ZephyrusP2/Botellas-de-Amor">Github Repository</a>
                        <div className="ImagesContainer"> 
                            <img className="Project-Image2" src={BotellasAmorAdmin}/>
                            <img className="Project-Image2" src={BotellasAmorAdminAnalisis}/>
                            <img className="Project-Image3" src={BotellasAmorApp}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}