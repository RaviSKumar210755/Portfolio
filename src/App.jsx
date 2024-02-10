import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// App.jsx
import React, { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Experience from "./components/Experience";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import SkillContainer from "./components/SkillContainer";
import EducationContainer from "./components/EducationContainer";
import Footer from "./components/Footer";

const App = () => {
  const [whatToShow, setWhatToShow] = useState("Home");
  const mainRef = useRef(null);
  const experienceRef = useRef(null);
  const skillRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const navbarHeight = 80; // Adjust this value to match your navbar's height

  useEffect(() => {
    const refs = {
      Home: mainRef,
      Experience: experienceRef,
      Skill: skillRef,
      Education: educationRef,
      Project: projectRef,
      Footer: contactRef,
    };
    if (refs[whatToShow] && refs[whatToShow].current) {
      const yOffset = -navbarHeight; // Apply the negative height as an offset
      window.scrollTo({
        top: refs[whatToShow].current.offsetTop + yOffset,
        behavior: "smooth",
      });
    }
  }, [whatToShow, navbarHeight]);

  return (
    <div>
      <Header setWhatToShow={setWhatToShow} whatToShow={whatToShow} />
      <div>
        <div ref={mainRef}>
          <MainPage />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={skillRef}>
          <SkillContainer />
        </div>
        <div ref={educationRef}>
          <EducationContainer />
        </div>
        <div ref={projectRef}>
          <ProjectList />
        </div>
        {/* <div ref={contactRef}>
          <Contact />
        </div> */}
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
