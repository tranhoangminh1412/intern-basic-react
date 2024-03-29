import { Link } from 'react-router-dom';


function Sidebar(props) {
    const { items, category, activeId, setActiveId } = props

    // props.items.forEach(item => {
    //     item.isActive = useRef(true)
    // });

    

    if (activeId != 4) {
        return (
            <div className="sidebar">
                <h3>{category}</h3>
                <ul>{items.map(item =>
                    <li key={item.id}>
                        <Link to={`contents/${item.id}`}>
                        <div onClick={() => setActiveId(item.id)} className={
                            item.id == activeId ? "sidebarItem-active" : "sidebarItem"}>
                            <p>{item.name}</p>
                        </div>
                        </Link>
                    </li>)}</ul>
            </div>
        )
    }
    
}

export default Sidebar