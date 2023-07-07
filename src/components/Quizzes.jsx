import React from "react";

function Quizzes() {
    return(<div className="quizzes">
        <h1 className="all-headings">CHALLENGE YOUR INTELLECT</h1>
        <hr className="all-hrs" />
        <h3 className="h3-heading">FUEL YOUR PASSION</h3>
        <div className="quizzes-content">
            <div className="text-part">
                <p className="quizzes-para">Explore a world of intriguing quizzes with the Quizzing Club - Where learning meets excitement!</p>
                <button className="join-us-btn">EXPLORE QUIZZES</button>
            </div>
            <img src="https://cdn.pixabay.com/photo/2021/08/08/09/52/man-6530416_1280.jpg" alt="quizzes-img" />
        </div>
    </div>);
}

export default Quizzes;