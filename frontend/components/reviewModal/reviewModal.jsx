import React, { useState, useEffect, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { ImCross } from 'react-icons/im'

const Modals = (props) => {
  const [tags, setTags] = useState([]);
  const [starHover, setStarHover] = useState();
  const [stars, setStars] = useState()

  const tagArr = ["Chimken", "Lesanga", "Pie"];

  const handleSubmit = () => {};

  return (
    <div className={`modalMain ${props.recModalActive && "modalActive"}`}>
      <div
        onClick={() => props.setRecModalActive(false)}
        className="overlay"
      ></div>
      <form onSubmit={handleSubmit} className="modalForm">
        <div className="stars">
          {Array(5)
            .fill(1)
            .map((star, index) => {
              return (
                <AiFillStar
                  className={`star ${starHover && 'starHover'}`}
                  onMouseEnter={() => stars > setStarHover(index)}
                  onMouseLeave={() => !stars && setStarHover(0)}
                  onClick={() => setStars(index)}
                />
              );
            })}
        </div>
        <div className="tags">
          <div className="tagInputs">
            <input type="text" placeholder="Tags" />
            <button className="tagSubmit">Add</button>
          </div>
          <div className="tagArr">
            {tagArr.map((tag) => {
              return (
                <div className="tag">
                  <ImCross className="xIcon"/>
                  <p>{tag}</p>
                </div>
              );
            })}
          </div>
        </div>
        <textarea
          name="description"
          type="text"
          placeholder="Tell us more about this recommendation"
        ></textarea>
        <div className="modalButtons">
          <button
            className="cancelButton"
            onClick={() => props.setRecModalActive(false)}
          >
            cancel
          </button>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Modals;
