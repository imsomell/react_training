import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about'>
                <h4>Version 1.0.0</h4>
                <p>Copyright &copy; 2021</p>
                <p><a href='https://www.github.com/imsomell'>Mel Macapagal</a></p>
            </div>
            <div>
                <Link to='/'>Go Back</Link>
            </div>
        </div>
    )
}

export default About
