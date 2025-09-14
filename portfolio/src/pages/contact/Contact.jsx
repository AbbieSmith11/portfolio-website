import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ContactContainer from "../../components/ContactContainer/ContactContainer.jsx";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div id="page">
        <Navbar />

        <div id="fade">
          <h1>Contact Me</h1>

          <div id="contact-box">
            <ContactContainer
              devicon="devicon-linkedin-plain"
              name="LinkedIn"
              link="https://www.linkedin.com/in/abbiesmith1/"
            />
            <ContactContainer
              devicon="devicon-github-original colored"
              name="Github"
              link="https://github.com/AbbieSmith11"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
