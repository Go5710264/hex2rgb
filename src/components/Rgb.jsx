import PropTypes from 'prop-types';

const Rgb = ( props ) => {
    const { rgbValue } = props;

    return(
        <div>
            <span>{rgbValue === null ? 'Ошибка!' : `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`}</span>
        </div>
    )
}

Rgb.propTypes = {
    rgbValue: PropTypes.object
}

export default Rgb;