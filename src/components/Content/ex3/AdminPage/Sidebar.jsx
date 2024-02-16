import { useState } from "react"


function Sidebar(props) {
    const {fullname, position, setActivePage, activeUser} = props

    const [active,setActive] = useState(1)

    return (
        <div className="admin-sidebar">
            <div className="sidebar-info-block">
                <img className="sidebar-info-avatar" src="./src/assets/defaultava.png" alt="" />
                <p className="sidebar-info-fullname">{activeUser.fullname}</p>
                {activeUser.position ? <p className="sidebar-info-role">{activeUser.position}</p> : <></>}
            </div>
            <div className="sidebar-item-block">
                <div onClick={()=>setActive(1)} className={active == 1 ? "sidebar-item-active" : "sidebar-item"}>
                    <p className="sidebar-item-text">Requests</p>
                </div>
                <div onClick={()=>setActivePage(0)} className={active == 2 ? "sidebar-item-active" : "sidebar-item"}>
                    <p className="sidebar-item-text">Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar