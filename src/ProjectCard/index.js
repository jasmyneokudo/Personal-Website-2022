import './index.scss';

const ProjectCard = ({project}) => {
    return (
        <div className='project'>
        <div className='box-one'> 
            <h2>
                <span className='project-name'>{project.name}</span> <br/>
                __<br/>
                <span className='project-stack'>{project.technology}</span>
            </h2>
        </div>
        <div className='box-two'> 
            <p>
                {project.description}
            </p>
            <a href={project.link}>
               {project.link}
            </a>
        </div>
        
    </div>
    )
}

export default ProjectCard;