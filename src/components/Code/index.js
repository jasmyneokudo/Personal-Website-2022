import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHorizo } from '@fortawesome/free-solid-svg-icons';
import { faRectangleTimes } from '@fortawesome/free-solid-svg-icons';
import WorkCard from '../WorkCard';
import ProjectCard from '../../ProjectCard';

const jobs = [
    {
        name: 'AEDC',
        duration: '2022 till date',
        achievements: [
            'Laborum labore proident est culpa ex ullamco id tempor.',
            'Laborum labore proident est culpa ex ullamco id tempor.',
            'Laborum labore proident est culpa ex ullamco id tempor.',
        ]
    },
    {
        name: 'Gitstart',
        duration: '2021 till date',
        achievements: [
            'Built a mobile application with react-native for a fin-tech organization',
            'Worked on a complex Vanilla jS custom framework codebase',
            'Provided valuable code reviews and helped shipped clean code',
        ]
    },
    {
        name: 'AFTJ Digital',
        duration: '2020 - 2021',
        achievements: [
            'Laborum labore proident est culpa ex ullamco id tempor.',
            'Laborum labore proident est culpa ex ullamco id tempor.',
            'Laborum labore proident est culpa ex ullamco id tempor.',
        ]
    },
    
]

const projects = [
    {
        name: 'Instrumental',
        description: 'Instrumental delivers a unified, traceable data record to help identify and investigate issues. Unify your product data, act on it faster, and leverage AI to solve previously intractable problems on your line.',
        link: 'https://app-stage.instrumental.ai/',
        technology: 'Typescript, VanillaJS, SASS'
    },
    {
        name: 'Paycrow',
        description: 'Paycrow acts as a middleman in transactions and hold funds securely until you are satisfied with what you paid for.',
        link: 'https://paycrow.io/',
        technology: 'Typescript, React-native, CSS'
    },
    {
        name: 'JCCIGT',
        description: 'Official mobile application for Jubilee Christian Church International - Christian organisation in the US',
        link: 'https://play.google.com/store/apps/details?id=com.aftjchurch',
        technology: 'Javascript, React-native, Firebase'
    }
]
const Code = () => {
    return (
        <div className='code'>
            <div className='some-intro'>
                <p>
                    I am an experienced Software Engineer with over 3 years on experience in the industry, I am a great team player
                    with lots of experience with working with a number of teams both remotely and on-site. My tech stack includes
                    Javascript, React, React-native and I have coded Java, PHP, Node JS in the past.
                </p>

                <p>It is my dream and goal to work with on of the leading tech company and use the opportunity to learn, grow and
                    contribute my quota to the society.
                </p>
            </div>

            <div className='projects'>
                <h1>Projects</h1>
            
                {
                    projects.map(project => <ProjectCard project={project} />)
                }
               
            </div>
            <div className='experience'>
                <h1>Work History</h1>
                {
                    jobs.map((job, i) => {
                        return <>
                            <WorkCard job={job}/>
                        </>
                        
                    })
                }
            </div>
        </div>
    )
}

export default Code;