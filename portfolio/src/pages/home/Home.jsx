import Navbar from "../../components/navbar/Navbar.jsx";
import Profile from "../../components/profile/Profile.jsx";
import AboutMe from "../../components/aboutMe/AboutMe.jsx";
import Hobbies from "../../components/hobbies/Hobbies.jsx";
import Skills from "../../components/skills/skills.jsx";
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
