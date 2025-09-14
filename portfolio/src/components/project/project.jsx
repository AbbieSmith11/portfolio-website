import './Project.css';

export default function Project(project) {

    

    return (
        <>
        <div id='project'>
            <div id='name-and-link'>
            
            <a href={project.link} target="_blank" rel="noopener noreferrer" id='github-link'><i class="devicon-github-original colored"></i></a>
            <h4>{project.name}</h4> 
            </div>
            
            <p>{project.description}</p>
        </div>

        <div>

        </div>
        </>
    )
}