
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const LightModeButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
`;

const LightModeIcon = styled.i`
  font-size: 24px;
  color: #fff;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [themeMode, setThemeMode] = useState("dark");
  const [icon, setIcon] = useState("sun"); // Initialisez l'icône par défaut

  const toggleTheme = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
    setIcon(icon === "sun" ? "moon" : "sun"); // Change l'icône
  };
  

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <LightModeButton onClick={toggleTheme}>
  {icon === "sun" ? (
    <FontAwesomeIcon icon={faSun} size="lg" />
  ) : (
    <FontAwesomeIcon icon={faMoon} size="lg" />
  )}
</LightModeButton>

        <Body>
          <HeroSection />
         
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
           
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
