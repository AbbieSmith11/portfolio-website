import './contactContainer.css';

export default function ContactContainer (contact) {
    return (
        <div id='contact-container'>
            <i class={contact.devicon}></i>
            <div id='nameLink'>
            <h3>{contact.name}</h3>
            <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.link}</a>
            </div>
            
        </div>
    )
}