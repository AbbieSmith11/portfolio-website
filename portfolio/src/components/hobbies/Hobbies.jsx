import "./Hobbies.css";
import Hobby from "./Hobby/Hobby.jsx";

function Hobbies() {
  return (
    <section id="hobbies-section">
      <h1>Hobbies</h1>
      <div id="hobbies">
        <ul>
          <Hobby
            name="Chess"
            icon='./images/chess.svg'
            text="I enjoy Playing chess for the challenge of strategic thinking and problem-solving."
          />
          <Hobby
            name="Weightlifting"
            icon='./images/weight.svg'
            text="I enjoy staying active and challenging myself physically."
          />
          <Hobby
            name="Reading"
            icon='./images/book.svg'
            text="I focus on books about business, finance, and personal development to fuel my growth and expand my perspective."
          />
          <Hobby
            name="Functional Medicine"
            icon='./images/health.svg'
            text="I'm interested in holistic approaches to health and wellness."
          />
        </ul>
      </div>
    </section>
  );
}

export default Hobbies;
