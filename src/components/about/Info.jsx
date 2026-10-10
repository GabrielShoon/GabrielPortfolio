import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="uil uil-lightbulb-alt about__icon"></i>

                <h3 className="about__title">Curious</h3>
                <span className="about__subtitle">Always eager to learn</span>
                
            </div>

            <div className="about__box">
                <i class="uil uil-puzzle-piece about__icon"></i>

                <h3 className="about__title">Innovative</h3>
                <span className="about__subtitle">Turning ideas into solutions</span>
            </div>

            <div className="about__box">
                <i class="uil uil-chart-line about__icon"></i>

                <h3 className="about__title">Driven</h3>
                <span className="about__subtitle">Committed to constant growth</span>
            </div>
        </div>
    )
}

export default Info