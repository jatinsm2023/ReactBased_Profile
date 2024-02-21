import React, { useState } from 'react'
import './Home.css'
import jatin from './jatin.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";

import {
    Link,
} from "react-router-dom";


function getDate() {
    const today = new Date();
    const hour = today.getHours();
    const sec = today.getSeconds();
    const date = today.getDate();
    const minute = today.getMinutes();
    const month = today.toLocaleString('default', { month: 'long' });
    return `${hour}:${minute}:${sec} | ${date} ${month}`;
}

function Home() {
    const [currentDate, setCurrentDate] = useState(getDate());
    window.setInterval(() => {
        setCurrentDate(getDate());
    }, 1000);

    return (
        <>

            <div className="upper"></div>
            <div className="middle">
                <div className="box">
                    <div className="image">
                        <img src={jatin} className="rounded img-fluid" alt="" width={'550px'} />
                    </div>
                    <div className="some">
                        <div className="material">
                            <p>Hello Everybody, i'm</p>
                            <h1>Jatin <br />Mahawar</h1>
                            <p>Web Developer</p>
                            <span>I am a second year undergraduate student at IIT Kharagpur, pursuing B.tech in Computer Science and Engineering Department.</span>
                            <br /><br />
                            <p>&#128197; <span> {currentDate}</span></p>
                            <p>&#128222; <span>+91 8386832934</span></p>
                            <p>&#128231; <span>Jatinmahawar08@gmail.com</span></p>
                            <p>&#127968; <span>IIT Kharagpur</span></p>

                            <p>
                                <Link to="https://www.linkedin.com/in/jatin-mahawar-b086a4253/" rel="noreferrer" target="_blank"><FaLinkedin /></Link>
                                <Link to="https://www.facebook.com/jatin.m.376695" rel="noreferrer" target="_blank"><FaFacebookSquare /></Link>
                                <Link to="https://www.instagram.com/jatinm._3/" rel="noreferrer" target="_blank"><FaInstagram /></Link>
                                <Link to="https://github.com/jatinsm2023" rel="noreferrer" target="_blank"><VscGithubInverted /></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower">

            </div>
        </>
    )
}

export default Home