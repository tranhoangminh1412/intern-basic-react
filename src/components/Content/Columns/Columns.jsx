import Todos from "./Todos"

function Columns (props) {
    let newItems = []
    Todos.forEach(todo => {todo.status == "New" ? newItems.push(todo) : ''})
    let finishedItems = []
    Todos.forEach(todo => {todo.status == "Finished" ? finishedItems.push(todo) : ''})
    let abortedItems = []
    Todos.forEach(todo => {todo.status == "Aborted" ? abortedItems.push(todo) : ''})
    
    return(
        <ul>
            {newItems.map(item => <li>{item.name}&nbsp; <p>{item.date}</p></li>)}
        </ul>
    )
}

export default Columns