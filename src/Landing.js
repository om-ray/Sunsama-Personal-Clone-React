import React from "react";
import "./App.css";

function Landing() {
  return (
    <div className="Full_page_container">
      <div className="Text_container">
        <h1 className="Title">Luminity</h1>
        <p className="Basic_text">
          This is a project based on{" "}
          <a
            className="sunsama"
            href="https://sunsama.com/"
            rel="noopener noreferrer"
            target="_blank">
            Sunsama
          </a>
          . It is a Daily task manager made for personal use that is{" "}
          <b> completely</b> free
        </p>
      </div>
    </div>
  );
}

export default Landing;
