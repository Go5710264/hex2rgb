import { useState } from "react";
import Hex from "./Hex";
import Rgb from "./Rgb";

const Background = () => {
    const [color, setColor] = useState('#B8860B')

    const colorChange = (event) => {
        event.preventDefault();
        setColor(event.target.colorHexName.value.trim());
        console.log(color)
        document.querySelector('body').style = `background-color: ${color}`
    }

    const hex2rgb = (color) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);

        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    return (
        <div className="wrapper" style = {{backgroundColor: color}}>
            <div className="weapper-input">
                <Hex setColor={colorChange}/>
                <Rgb rgbValue={hex2rgb(color)}/>
            </div>
        </div>
    )
}

export default Background;