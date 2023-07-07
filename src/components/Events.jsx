import React from "react";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Events() {
    return(<div className="events">
        <h3 className="h3-heading">PAST</h3>
        <h1 className="all-headings">EVENTS</h1>
        <hr className="all-hrs" />
        <div className="past-events">
            <ArrowCircleLeftOutlinedIcon />
            <div className="each-card">
                <img src="https://cdn.pixabay.com/photo/2023/06/11/19/09/fruit-8056663_1280.jpg" alt="img 1" />
                <h6 className="event-name">Event Name 1</h6>
                <p>Hello</p>
            </div>
            <div className="each-card">
                <img src="https://cdn.pixabay.com/photo/2023/06/11/19/09/fruit-8056663_1280.jpg" alt="img 1" />
                <h6 className="event-name">Event Name 1</h6>
                <p>Hello</p>
            </div>
            <div className="each-card">
                <img src="https://cdn.pixabay.com/photo/2023/06/11/19/09/fruit-8056663_1280.jpg" alt="img 1" />
                <h6 className="event-name">Event Name 1</h6>
                <p>Hello</p>
            </div>
            <ArrowCircleRightOutlinedIcon />
        </div>
    </div>);
}

export default Events;