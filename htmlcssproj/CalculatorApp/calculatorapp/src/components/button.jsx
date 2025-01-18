/* eslint-disable react/prop-types */
import "../style/button.css"

function Button({symbol, color, handleClick}){
    return(
        <div className = "button-wrapper" style ={{backgroundColor: color}} onClick={()=>handleClick(symbol)}> {symbol}
        </div>
    )

}

export default Button

