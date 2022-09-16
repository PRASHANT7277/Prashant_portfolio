import "./App.css";
import Home from "./PortfolioContainer/Home/Home"
import About from "./PortfolioContainer/AboutMe/About";
import Navbar from "./PortfolioContainer/Navbar/Navbar";

import Contact from "./PortfolioContainer/ContactMe/Contact";
import Project from "./PortfolioContainer/Project/Project";
import Footer from "./PortfolioContainer/Footer/Footer";
import Skills from "./PortfolioContainer/Skills/Skills";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
