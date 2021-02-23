import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {

    const onClick = () => {
        console.log('Click')
    }
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button color='#f0f0f0' bgColor={showAdd ? '#f3110b' : '#254210'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Personal Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
