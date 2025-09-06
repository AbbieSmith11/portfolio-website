import Navbar from "../../components/navbar/Navbar.jsx";
import Profile from "../../components/profile/Profile.jsx";
import AboutMe from "../../components/aboutMe/AboutMe.jsx";
import Hobbies from "../../components/hobbies/Hobbies.jsx";
import './home.css'

function Home() {
  return (
    <>
      <Navbar />
      <Profile />
      <AboutMe />
      <Hobbies />
    </>
  );
}

export default Home;
