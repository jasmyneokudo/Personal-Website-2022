import './index.scss';
import Code from '../../assets/images/se.jpg';
import Paint from '../../assets/images/paint.jpg';
import Creator from '../../assets/images/content-creator.jpg';
import Card from '../Card';

const data = [
    {
        title: "Software Engineer",
        description: "I am a passionate Software development engineer with over"
            +" 3 years on experience in the industry. I'm a great team player and enjoy working on large projects",
        image: Code,    
    },
    {
        title: "Content Creator",
        description: "I am a talented Pencil and Paint Artist. Drawing, painting and collecting art are my hobbies.",
        image: Creator,    
    },
    {
        title: "Artist",
        description: "I am a talented Pencil and Paint Artist. Drawing, painting and collecting art are my hobbies.",
        image: Paint,    
    },

]
const Home = () => {
    return (
        <div className='home'>
            {
                data.map((item) => (
                    <Card description={item.description} image={item.image} title={item.title}/>
                ))
            }

        </div>
    )
}

export default Home;