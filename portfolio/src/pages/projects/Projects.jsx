import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Projects.css";
import Project from "../../components/Project/Project.jsx";
import Tool from "../../components/Tools/Tool.jsx";

function Projects() {
  return (
    <>
      <div id="page">
        <Navbar />

        <div id="fade">
          <h1>My Projects</h1>

          <div id="full">
            <Project
              name="Earth Angel Club"
              description="EarthAngel.Club is an website designed to support women on their journeys of self-love, healing, and personal growth. The website offers free resources and inspiration to help users reconnect with their inner strength and confidence."
              link="https://github.com/AbbieSmith11/EarthAngelClub"
            />
            <div id="tools">
              <Tool name="HTML" colour="#FF5A5F" />
              <Tool name="CSS" colour="#B8B4D9" />
              <Tool name="Javascript" colour="#F7C6D9" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
