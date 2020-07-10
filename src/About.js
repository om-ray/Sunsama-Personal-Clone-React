import React from "react";
import "./App.css";

function About() {
  return (
    <div className="Full_page_container">
      <div className="Text_container">
        <h1 className="Title">About</h1>
        <p className="Basic_text">
          Luminity is a clone of Sunsama made solely for personal use and
          educational purposes. It has no intention of competing with the actual
          Sunsama. Luminity is only for a single person, and not for teams. If
          you want a daily tracker for a team then please go to:
          <br />
          <br />
          <br />
          <br />
          <a
            id="sunsama"
            href="https://sunsama.com/"
            rel="noopener noreferrer"
            target="_blank">
            Sunsama
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
