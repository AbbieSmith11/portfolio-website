import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./projects.css";
import Project from "../../components/project/project.jsx";
import Tool from "../../components/tools/tool.jsx";

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

          <div id="full">
            <Project
              name="Calculator App"
              description="A simple calculator built with React, TypeScript, Vite, and Tailwind CSS. It supports basic arithmetic operations with a responsive and clean design."
              link="https://github.com/AbbieSmith11/calculator"
            />
            <div id="tools">
              <Tool name="React" colour="#B8B4D9" />
              <Tool name="TypeScript" colour="#F7C6D9" />
              <Tool name="Vite" colour="#FF5A5F" />
              <Tool name="Tailwind CSS" colour="#B8B4D9" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
