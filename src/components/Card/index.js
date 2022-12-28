import './index.scss';

const Card = ({title, image, description}) => {
    return (
        <div className='card'>
            <h2 className='card-title'>{title}</h2>
            <img className='card-image' src={image} alt=''/>
            <div className='card-description'>
                <p>
                    {description}
                </p>
            </div>
            
        </div>
    )
}

export default Card;