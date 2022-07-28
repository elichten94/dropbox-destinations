import React, { useState, useEffect, useRef } from "react";

const Modals = (props) => {
  const [cities, setCities] = useState([]);
  const cityInputRef = useRef();

  const handleSubmit = () => {};

  const handleCitySearch = (e) => {
    e.preventDefault();
    getCities(cityInputRef.current.value);
  };

  const getCities = (city) => {
    const url = new URL("https://referential.p.rapidapi.com/v1/city");
    url.searchParams.append(
      "fields",
      "iso_a2,state_code,state_hasc,timezone,timezone_offset"
    );
    url.searchParams.append("lang", "en");
    url.searchParams.append("prefix", city);
    url.searchParams.append("limit", "10");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "718d5164a4msh3e47261d3442dfap1f2907jsn53fc3d323e73",
        "X-RapidAPI-Host": "referential.p.rapidapi.com",
      },
    };

    fetch(url.toString(), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCities(data);
      });
  };

  return (
    <div className={`modalMain ${props.recModalActive && "modalActive"}`}>
      <div
        onClick={() => props.setRecModalActive(false)}
        className="overlay"
      ></div>
      <form onSubmit={handleSubmit} className="modalForm">
        <input
          name="rec"
          type="text"
          placeholder="What's your recommendation?"
        />
        <div className="cityContainer">
          <input
            ref={cityInputRef}
            className="city"
            type="text"
            placeholder="Which city is it in?"
            list="cityname"
          />
          <datalist id="cityname">
            {cities.map((city, index) => (
              <option
                key={city.value + index}
                value={
                  city.value +
                  ", " +
                  city.state_code.split("-")[1] +
                  ", " +
                  city.state_code.split("-")[0]
                }
              />
            ))}
          </datalist>
          <button onClick={handleCitySearch} className="cityButton">
            Search
          </button>
        </div>
        <textarea
          name="description"
          type="text"
          placeholder="Tell us more about your experience"
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
