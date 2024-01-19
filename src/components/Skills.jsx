import React from "../assets/icons/React.png"
import R from "../assets/icons/R.png"
import css from "../assets/icons/css.png"
import django from "../assets/icons/django.png"
import Docker from "../assets/icons/Docker.png"
import Figma from "../assets/icons/Figma.png"
import Git from "../assets/icons/Git.png"
import Html from "../assets/icons/Html.png"
import Java from "../assets/icons/Java.png"
import JavaScript from "../assets/icons/JavaScript.png"
import MatLab from "../assets/icons/MatLab.png"
import MySQL from "../assets/icons/MySQL.png"

import Python from "../assets/icons/Python.png"
import php from "../assets/icons/php.png"
import React_Vite from "../assets/icons/React_Vite.png"



export function Skills() {


    return (

        <div className="Skills-Container">

            <div className="Skills-Text-Container">
                <h2 className="Subtittle2">My Skills</h2>
            </div>
            <div>
                <ul className="Skills-Icons">
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={React} alt="React" />
                        <span>React </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={R} alt="R" />
                        <span>RStudio </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={css} alt="css" />
                        <span> CSS </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={django} alt="django" />
                        <span> Django </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={Docker} alt="Docker" />
                        <span> Docker </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={Figma} alt="Figma" />
                        <span> Figma </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={Git} alt="Git" />
                        <span> Git </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={Html} alt="Html" />
                        <span> HTML </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={Java} alt="Java" />
                        <span> Java </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={JavaScript} alt="JavaScript" />
                        <span> JavaScript </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={MatLab} alt="MatLab" />
                        <span> MatLab </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={MySQL} alt="MySQL" />
                        <span> MySQL </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={Python} alt="Python" />
                        <span> Python </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={php} alt="php" />
                        <span> Php </span>
                    </li>
                    <li className="Icons-Container">
                        <img className="Icon-Skills" src={React_Vite} alt="React_Vite" />
                        <span> React Vite </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}