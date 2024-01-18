import MyImage from '../assets/images/MyImage.png'

export function About() {
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
                </div>
                <div className="MyImage">
                    <img className="MyImage" src={MyImage} alt='Me' />
                </div>
        </div>
        </div>
    )



}