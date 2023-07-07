import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-scroll";

function Header() {
    return(<div className="header">
        <nav class="navbar navbar-expand-lg">
  <a class="logo" href="/">QUREKA</a>
  <button class="toggle-btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"><MenuIcon /></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
          <Link to="/" smooth={true} offset={-70} duration={100} class="nav-link"><span className="nav-comp">About</span></Link>
        </li>
        <li class="nav-item">
          <Link to="about" smooth={true} offset={-70} duration={100} class="nav-link"><span className="nav-comp">Events</span></Link>
        </li>
        <li class="nav-item">
          <Link to="quizzes" smooth={true} offset={-70} duration={100} class="nav-link"><span className="nav-comp">Quizzes</span></Link>
        </li>
        <li class="nav-item">
          <Link to="achievements" smooth={true} offset={-70} duration={100} class="nav-link"><span className="nav-comp">Team</span></Link>
        </li>
        <li class="nav-item">
          <Link to="contact-us" smooth={true} offset={-70} duration={100} class="nav-link"><span className="nav-comp">Contact Us</span></Link>
        </li>
    </ul>
  </div>
</nav>
    </div>);
}

export default Header;