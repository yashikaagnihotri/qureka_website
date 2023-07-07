import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Quizzes from "./components/Quizzes";
import Instagram from "./components/Instagram";
import FAQ from "./components/FAQ";

function App() {
  return (<div>
    <Header />
    <Home />
    <About />
    <Events />
    <Quizzes />
    <Instagram />
    <FAQ />
  </div>);
}

export default App;