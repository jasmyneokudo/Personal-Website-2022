import './index.scss';

const WorkCard = ({job}) => {
    return (
        <div className='work-card'>
            <div className='work-heading'>
                <h2>
                    <span className='company-name'>{job.name} - </span>
                    <span className='work-duration'>{job.duration}</span>
                </h2>
            </div>
            <div className='work-achievements'>
                <ul>
                    {
                        job.achievements.map((item) => <li>{item}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default WorkCard;