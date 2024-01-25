import ListItem from "../Sidebar/components/todoList/ListItem"
import List from "../Sidebar/components/todoList/List"
import Home from "../Sidebar/components/Home"
import Columns from "./Columns/Columns"

function Content(props) {
    let category = props.category
    let contents = props.items

    return(
        <div className="Content">
            <h3>{category}</h3>
            {props.activeId == 1 ? <Home></Home> : ''}
            {props.activeId == 2 ? <List items={ListItem}></List> : ''}
            {props.activeId == 3 ? <Columns /> : ''}
            {props.activeId == 4 ? <Home></Home> : ''}
        </div>
    )
}

export default Content