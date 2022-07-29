import React, { useState, useEffect, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { ImCross } from 'react-icons/im'

const Modals = (props) => {
  const [tags, setTags] = useState({tags: []});
  const [starHover, setStarHover] = useState();
  const [stars, setStars] = useState()

  const tagArr = ["Chimken", "Lesanga", "Pie"];

  const handleSubmit = (e) => {
    e.preventDefault();
    putData();
  };

  const tagSubmitHandler = (e) => {
    e.preventDefault();
    const tagsi = tags.tags
    tagsi.push(tagInputRef.current.value);
    setTags({...tags.tags, tags: tagsi});
    console.log(tags);
    const tagInput = document.getElementById('tagInput');
    tagInput.value = '';
  };

  const handleCancelTag = (e) => {
    e.preventDefault();
    console.log(e);
    const tagIndex = e.currentTarget.attributes['name'].value;
    console.log(tagIndex);
    const tagsi = tags.tags
    tagsi.splice(tagIndex, 1);
    setTags({...tags.tags, tags: tagsi});
  }

  const tagInputRef = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const populateTags = tags.tags.map((tag, index) => {
    console.log(index);
    return (
      <div className="tag" key={tag}>
        <ImCross onClick={handleCancelTag} name={index} className="xIcon"/>
        <p>{tag}</p>
      </div>
    );
  });

  const putData = () => {
    fetch('http://localhost:3000/api/reviews', {
      method: 'put',
      body: JSON.stringify(
        {
          title: titleInputRef,
          body: descriptionInputRef,
          user_id: 1,
          rec_id: 1,
          rating: 5,
          photo: 'https://sayingimages.com/wp-content/uploads/i-cant-handle-life-meme.jpg'
      },
    )
    })
    .then(res => {
      if (res.ok) { console.log("HTTP request successful") }
      else { console.log("HTTP request unsuccessful") }
      return res
    })
  }

  return (
    <div className={`modalMain ${props.recModalActive && "modalActive"}`}>
      <div
        onClick={() => props.setRecModalActive(false)}
        className="overlay"
      ></div>
      <form onSubmit={handleSubmit} className="modalForm">
          <div className="titleInputContainer">
            <input id="titleInput" type="text" placeholder="Recommendation Name" ref={titleInputRef} />
          </div>
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
            <input id="tagInput" type="text" placeholder="Tags" ref={tagInputRef} />
            <button className="tagSubmit" onClick={tagSubmitHandler}>Add</button>
          </div>
          <div className="tagArr">
            {populateTags}
          </div>
        </div>
        <textarea
          name="description"
          type="text"
          placeholder="Tell us more about this recommendation"
          ref={descriptionInputRef}
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
