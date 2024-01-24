import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";

function Sidebar(props) {
    const { items, category, activeId, setActiveId } = props

    // props.items.forEach(item => {
    //     item.isActive = useRef(true)
    // });

    return (
        <div className="sidebar">
            <h3>{category}</h3>
            <ul>{items.map(item =>
                <li key={item.id}>
                    <div onClick={() => setActiveId(item.id)} className={
                        item.id == activeId ? "sidebarItem-active" : "sidebarItem"}>
                        <p>{item.name}</p>
                    </div>
                </li>)}</ul>
        </div>
    )
}

export default Sidebar