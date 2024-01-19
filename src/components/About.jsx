import MyImage from '../assets/images/Mi_Foto.png'
import HojaDeVida from '../assets/HojaDeVida.pdf'

export function About() {

    const handleDownloadResume = () => {
        // Puedes utilizar la función window.open para abrir el PDF en una nueva pestaña
        window.open(HojaDeVida, '_blank');
    };

    return (
        <div>
            <div className="Container">

                <div className="Text-Container ">
                    <h1 className="Tittle"> Hello! </h1>
                    <h2 className="Subtittle">I'm Manuel Arango Gómez</h2>
                    <h3 className="Text">A seventh-semester student pursuing a
                        degree in Systems Engineering at EAFIT University, with a strong
                        academic background and a passion for technology. My focus is on
                        developing innovative and efficient solutions for complex computational challenges.</h3>
                    
                    <button onClick={handleDownloadResume} className="cssbuttons-io-button">
                        My CV
                        <div className="icon">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="MyImage">
                    <img className="MyImage" src={MyImage} alt='Me' />
                </div>
            </div>

        </div>
    )



}