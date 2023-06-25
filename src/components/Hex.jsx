import PropTypes from 'prop-types';

const Hex = ( props ) => {
    const { setColor } = props; 

    return (
        <form 
            onSubmit={setColor}
            >
            <label
                htmlFor='colorHexName'
            >Введите цвет в формате HEX</label>

            <br />

            <input 
                name="colorHexName"
                className='color-hex-name'
                placeholder='#B8860B'
            />
        </form>
    )
}

Hex.propTypes = {
    setColor: PropTypes.func
}

export default Hex;