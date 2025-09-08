import Navbar from "../../components/navbar/Navbar.jsx";
import ContactContainer from "../../components/contact-container/contactContainer.jsx";
import "./contact.css";

function Contact() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default Contact;
