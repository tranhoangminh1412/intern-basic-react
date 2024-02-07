import Positions from "./Positions";
import { render } from "react-dom";

export default function PositionsDropdown(props) {

    const { showPositions, setPosition, setPositionPlaceholder, setPositionSelectValue, positionSearchValue } = props
    let arr = []
    Positions.forEach(position => arr.push(<option value={position} />))

    if (showPositions) {
        return (
            <div className="positions-dropdown">
                {
                    positionSearchValue ? Positions.filter(str => str.includes(positionSearchValue)).map((position, index) => (
                        <div
                            key={index}
                            className="position-option"
                            onClick={(e) => { setPosition(position); setPositionSelectValue(position) }}
                        >
                            {position}
                        </div>
                    ))

                        :
                        Positions.map((position, index) => (
                            <div
                                key={index}
                                className="position-option"
                                onClick={(e) => { setPosition(position); setPositionSelectValue(position) }}
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