import Acentos from "../assets/images/Acentos.jpg"

export function Projects() {

    return (

        <div id="Projects" className="Projects-Container">
            <div className="Text-Container-Projects">
                <div>
                    <h2 className="Subtittle2"> My Projects</h2>
                </div>
                <div>
                    <div>
                        <h2 className="Subtittle-Project">Ecommerce - AcentosApp</h2>
                        <h3 className="Text-Projects">Ever wanted to explore the fantastic world of books at EAFIT University's Acentos Library? 📚 But wait, there's no online platform to make your book-hunting easier! 😩 Fret not! We're here to save the day with a brilliant web application. 🌐💻 With AcentosPage, you can dive into the treasure trove of discounted books and materials, browse, buy, and have them delivered right to your doorstep! 🚚📦</h3>
                        <img className="Project-Image" src={Acentos}/>
                       
                    </div>
                </div>
            </div>
        </div>
    )

}