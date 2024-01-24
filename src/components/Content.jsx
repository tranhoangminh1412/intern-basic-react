import ListItem from "./todoList/ListItem"
import List from "./todoList/List"
import Home from "./Home"

function Content(props) {
    let category = props.category
    let contents = props.items

    return(
        <div className="Content">
            <h3>{category}</h3>
            {props.activeId == 1 ? <Home></Home> : ''}
            {props.activeId == 2 ? <List items={ListItem}></List> : ''}
            {props.activeId == 3 ? <Home></Home> : ''}
            {props.activeId == 4 ? <Home></Home> : ''}
        </div>
    )
}

export default Content