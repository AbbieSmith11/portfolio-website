import Navbar from "../../components/Navbar/Navbar.jsx";
import Profile from "../../components/Profile/Profile.jsx";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import Hobbies from "../../components/Hobbies/Hobbies.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <div id="page">
        <Navbar />
        <div id="fade">
          <Profile />
          <AboutMe />
          <Skills />
          <Hobbies />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
