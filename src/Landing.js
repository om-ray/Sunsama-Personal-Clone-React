import React from "react";
import "./App.css";
let Frame_1 = require("./Frame_1.svg");
let Frame_2 = require("./Frame_2.svg");

function Landing() {
  let floatLeftStyle = {
    float: "left",
  };

  let floatRightStyle = {
    float: "right",
  };

  return (
    <div className="Full_page_container">
      <div className="Text_container">
        <div id="Landing_image1">
          <img id="img_left" src={Frame_1} alt="Frame_1" />
          <h1 className="Title caption_Left">
            The best free daily task manager for professionals.
          </h1>
          <br />
          <p className="Img_caption">
            Keep your <b>whole</b> day organized in one place. Tasks, meetings,
            tickets, you name it!
          </p>
          <input
            type="email"
            name="Email"
            id="emailInput"
            placeholder="Enter your email"
          />
          <button id="signUp" className="Sign_up">
            Request Access
          </button>
        </div>
        <hr />
        <div id="Landing_image2">
          <img src={Frame_2} alt="" id="img_right" />
          <div id="caption2">
            <h1 className="Title caption_Left" style={floatLeftStyle}>
              Prioritize your work day by day.
            </h1>
            <br />
            <p className="Img_caption" style={floatLeftStyle}>
              Set reasonable goals for what you want to accomplish each day.
              Tasks you don't get to today automatically roll over to tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
