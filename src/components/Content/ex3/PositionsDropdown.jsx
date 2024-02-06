import Positions from "./Positions";
import { render } from "react-dom";

export default function PositionsDropdown(props) {

    const { showPositions,setPosition,setPositionPlaceholder,setPositionSelectValue } = props
    let arr = []
    Positions.forEach(position => arr.push(<option value={position} />))

    if (showPositions) {
        return (
            <div className="positions-dropdown">
                {Positions.map((position, index) => (
                    <div
                        key={index}
                        className="position-option"
                        onClick={(e) => {setPosition(position);setPositionPlaceholder(position);setPositionSelectValue(position)}}
                    >
                        {position}
                    </div>
                ))}
            </div>
        )
    }
    else {
        return null
    }

}