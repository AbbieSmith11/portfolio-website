import "./Hobbies.css";
import Hobby from "./hobby/Hobby.jsx";
import Chess from './chess/chess.jsx'

function Hobbies() {
  return (
    <section id="hobbies-section">
      <h1>Hobbies</h1>
      <div id="hobbies">
        <ul>
          <Hobby
            name="Chess"
            text="I enjoy Playing chess for the challenge of strategic thinking and problem-solving"
          />
          <Hobby
            name="Weightlifting"
            text="I enjoy staying active and challenging myself physically"
          />
          <Hobby
            name="Reading"
            text="I focus on books about business, finance, and personal development to fuel my growth and expand my perspective"
          />
          <Hobby
            name="Functional Medicine"
            text="I'm interested in holistic approaches to health and wellness."
          />
        </ul>
      </div>
    </section>
  );
}

export default Hobbies;
