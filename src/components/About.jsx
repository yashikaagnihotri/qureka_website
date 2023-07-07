import React from "react";

function About() {
    return (<div className="about" id="about">
        <h1 className="all-headings">ABOUT US</h1>
        <hr className="all-hrs" />
        <div className="paras">
            <p>QUREKA offers students a unique, exciting and a fun way by motivating, inspiring and encouraging them in their quest and hunger for knowledge apart from their academic knowledge by providing them with the opportunities by conducting regular quizzes or various and interesting topics suggested by the members which keeps them updated and at par with the outside world.</p>
            <p>The goal of QUREKA is to motivate students to go beyond their text-based knowledge and develop a link between theory and practical application of the principles they have learned. Additionally, we strive to create quizzes in a way that is enjoyable, allowing one to develop general knowledge while also allowing pupils to "think outside the box" or from new perspectives.</p>
        </div>
        <button className="join-us-btn">KNOW MORE</button>
    </div>);
}

export default About;