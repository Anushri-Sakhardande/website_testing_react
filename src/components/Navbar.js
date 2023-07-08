import React from "react";

export default function Navbar() {
  return (
    <div>
      <header class="main-header">
        <h1 class="banner">#include&#60;all_in_stem.h&#62;</h1>

        <nav>
          <ul class="nav">
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Mission</a>
            </li>
            <li>
              <a>Vision</a>
            </li>
            <li>
              <a href="index.html">Roadmaps</a>
            </li>
          </ul>
        </nav>

        <div class="button-header-container">
          <button type="button" class="button button-header">
            Login
          </button>
          <button type="button" class="button button-header">
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
}
