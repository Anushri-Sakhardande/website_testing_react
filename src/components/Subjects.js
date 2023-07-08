import React from "react";

export default function Subjects(props) {
  return (
    <div className="container">
      <h2 className="subjects-header">Roadmaps</h2>

      <div className="subjects">
        <a>
          <button className="button button-subject">
            <img src="images/english.png" height="50px" />
            <p> English</p>
          </button>
        </a>

        <a href="math.html">
          <button className="button button-subject">
            <img src="images/math.png" height="50px" />
            <p>Mathematics</p>
          </button>
        </a>

        <a>
          <button className="button button-subject">
            <img src="images/physics .png" height="50px" />
            <p>Physics</p>
          </button>
        </a>

        <a>
          <button className="button button-subject">
            <img src="images/chemistry.png" height="50px" />
            <p>Chemistry</p>
          </button>
        </a>

        <a>
          <button className="button button-subject">
            <img src="images/biology.png" height="50px" />
            <p>Biology</p>
          </button>
        </a>

        <a>
          <button className="button button-subject">
            <img src="images/programing.png" height="50px" />
            <p>Programming</p>
          </button>
        </a>

        <a>
          <button className="button button-subject">
            <img src="images/web-development.png" height="50px" />
            <p>Web Development</p>
          </button>
        </a>

        <a>
          <button className="button button-subject">
            <img src="images/artificial-intelligence.png" height="50px" />
            <p>Artificial Intelligence and Machine Learning</p>
          </button>
        </a>

        <a>
          <button className="button button-subject">
            <img src="images/cybersecurity.png" height="50px" />
            <p>Cybersecurity</p>
          </button>
        </a>
      </div>
    </div>
  );
}
