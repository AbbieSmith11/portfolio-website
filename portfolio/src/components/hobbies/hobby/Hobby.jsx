import "./Hobby.css";

function Hobby(hobby) {
  return (
    <li>
      <h2>{hobby.name}</h2>
      <p>{hobby.text}</p>
    </li>
  );
}

export default Hobby;
