import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className="work__card">
      <img src={item.image} alt={item.title} className="work__img" />

      <h3 className="work__title">{item.title}</h3>

      <span
        className="works__button"
        onClick={() => setToggleState(true)}
      >
        View More
        <i className="uil uil-arrow-right works__button-icon"></i>
      </span>

      <div
        className={
          toggleState
            ? "works__modal active-modal"
            : "works__modal"
        }
      >
        <div className="works__modal-content">
          <i
            className="uil uil-times works__modal-close"
            onClick={() => setToggleState(false)}
          ></i>

          <h3 className="works__modal-title">
            {item.title}
          </h3>

          <p className="works__modal-description">
            {item.description}
          </p>

          <ul className="works__modal-works grid">
            {item.points.map((point, index) => (
              <li
                className="works__modal-work"
                key={index}
              >
                <i className="uil uil-check-circle works__modal-icon"></i>

                <p className="works__modal-info">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;