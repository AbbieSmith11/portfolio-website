import "./Hobby.css";

function Hobby(hobby) {
  return (
    <li>
        <div id="icon-and-name">
            <img id='icon' src={hobby.icon} alt="" />
            <h2>{hobby.name}</h2>
        </div>
        
      <p>{hobby.text}</p>
    </li>
  );
}

export default Hobby;
