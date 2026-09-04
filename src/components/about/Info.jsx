import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="uil uil-graduation-cap about__icon"></i>

                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">Diploma</span>
            </div>

            <div className="about__box">
                <i class="uil uil-suitcase-alt about__icon"></i>

                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Internships + Projects</span>
            </div>

            <div className="about__box">
                <i class="uil uil-setting about__icon"></i>

                <h3 className="about__title">Skills</h3>
                <span className="about__subtitle">Programming + Development</span>
            </div>
        </div>
    )
}

export default Info