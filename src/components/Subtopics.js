import React from "react";

export default function Subjects(props) {
  return (
    
<div><section class="container">

<h2 class="subjects-header"> {props.title}</h2>

<div class="subject-content">

    <div class="subject-content-card">
        <h3 class="subject-content-heading">Fundamentals</h3>
        <div class="subject-content-sub">
            <a>Counting</a>
            <a>Addition</a>
            <a>Subtraction</a>
            <a>Multiplication</a>
            <a>Division</a>
            <a>Fractions and Decimals</a>
        </div>
    </div>

    <div class="subject-content-card">
        <h3 class="subject-content-heading">Algebra</h3>
        <div class="subject-content-sub">
            <a>Variables</a>
            <a>Linear equations and inequalities</a>
            <a>Graphing lines</a>
            <a>Simultaneous equations</a>
            <a>Exponents</a>
            <a>Quadratic and Polynomials</a>
            <a>Matrices</a>
            <a>Complex Numbers</a>
        </div>
    </div>

    <div class="subject-content-card">
        <h3 class="subject-content-heading">Geometry</h3>
        <div class="subject-content-sub">
            <a>Triangles</a>
            <a>Congruence</a>
            <a>Similarity</a>
            <a>Circles</a>
            <a>Trigonometry</a>
            <a>3D geometry</a>
        </div>
    </div>

    <div class="subject-content-card">
        <h3 class="subject-content-heading">Trigonometry</h3>
        <div class="subject-content-sub">
            <a>Right Triangles</a>
            <a>Trigonometric Functions</a>
            <a>Trigonometric Identities</a>
            <a>Trigonometric Equations</a>
        </div>
    </div>

    <div class="subject-content-card">
        <h3 class="subject-content-heading">Statistics</h3>
        <div class="subject-content-sub">
            <a>Data types</a>
            <a>Probability</a>
            <a>Graphing</a>
        </div>
    </div>

</div>

</section></div>
  );
}




