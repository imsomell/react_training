import PropTypes from 'prop-types'

const Button = ({text, bgColor, fontColor, onClick}) => {

    return <button onClick={onClick} style={{backgroundColor: bgColor, color: fontColor }} className='btn btn-add'>{text}</button>
}

Button.defaultProps = {
    bgColor: '#212121',
    text: 'Save Task',
    fontColor: 'White',
}

Button.propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.string,
    fontColor: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
