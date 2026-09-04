import React from 'react'
import "./about.css"
import AboutImg from '../../assets/profilepic.jpeg'
import Resume from '../../assets/Resume_2026.pdf'
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        Hi, my name is Gabriel. I'm passionate about technology, software development, and AI, 
                        with a strong interest in creating practical and innovative solutions. 
                        I enjoy turning ideas into functional applications and have hands-on experience 
                        in programming, web development, automation, and AI projects.
                    </p>

                    <a
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button--flex"
                    >
                        Resume
                        <i class="uil uil-file-info-alt resume__icon"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About