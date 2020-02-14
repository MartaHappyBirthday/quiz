/* eslint-disable linebreak-style */
import React, { useState } from "react";
import Choose from "../img/choose.png";

const SecondScreen = e => {
  const [screenStatus, closeSecondScreen] = useState(
    "choose_container visible"
  );
  return (
    <div className={screenStatus}>
      <img src={Choose} alt="Choose" className="choose_img" />
      <div className="choose_container__buttons">
        <button
          className="choose_container__button"
          onClick={() => {
            e.getSex("male");
            closeSecondScreen("choose_container hidden");
            e.changeHidden("");
          }}
        >
          Наследник
        </button>
        <button
          className="choose_container__button"
          onClick={() => {
            e.getSex("female");
            closeSecondScreen("choose_container hidden");
            e.changeHidden("");
          }}
        >
          Наследница
        </button>
      </div>
    </div>
  );
};

export default SecondScreen;
