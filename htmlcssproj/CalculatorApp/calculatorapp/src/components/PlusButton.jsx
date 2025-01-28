/* eslint-disable react/prop-types */
import "../style/PlusButton.css"

function PlusButton({symbol, color, handleClick}){
    return(
        <div className = "plusButton" style ={{backgroundColor: color}} onClick ={()=>handleClick(symbol)}> {symbol}
        </div>
    )

}

export default PlusButton

