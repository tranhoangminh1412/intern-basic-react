import Todos from "./Todos"
import moment from "moment/moment"
import { ReactDOM, useState } from "react"

function Columns(props) {
    // Todos.forEach(todo => {todo.date = todo.date.toUTCString})

    let newItems = []
    Todos.forEach(todo => { todo.status == "New" ? newItems.push(todo) : '' })
    let finishedItems = []
    Todos.forEach(todo => { todo.status == "Finished" ? finishedItems.push(todo) : '' })
    let abortedItems = []
    Todos.forEach(todo => { todo.status == "Aborted" ? abortedItems.push(todo) : '' })

    const [input, setInput] = useState('')
    const [showAddNew, setAddNew] = useState(false)
    const [rerender, setRerender] = useState(false);

    if (rerender == true) {
        setRerender(false)
    }

    let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a')

    function addNewItem() {
        let myInput = document.getElementById("cc-1-input")
        if (myInput.value != '') {
            document.querySelector(".add-new-todo").style.display = "unset"
            Todos.unshift({
                name: input,
                date: currentDate,
                status: "New"
            })
            setAddNew(false)
            setInput('')
        }
        else {
            document.querySelector(".add-new-todo").style.display = "unset"
            setAddNew(false)
            setInput('')
        }
    }

    function cancelAddNew() {
        document.querySelector(".add-new-todo").style.display = "unset"
        setAddNew(false)
        setInput('')
    }

    function addNewTodo() {
        let myInput = document.getElementById("cc-1-input")
        document.querySelector(".add-new-todo").style.display = "none"
        myInput.value = ''
        setAddNew(true);
    }

    function setFinishedTask(index) {
        Todos[newItems[index].id - 1].status = "Finished"
        setRerender(true)
    }

    function setAbortTask(index) {
        Todos[newItems[index].id - 1].status = "Aborted"
        setRerender(true)
    }

    return (
        <div className="content-columns">
            <ul className="content-column" id="cc-1">
                <div className="cc-wrapper">
                    <div id="cc-addnew" className="content-column-listitem" style={showAddNew ? {} : { display: 'none' }}>
                        <input className="cc-1-input" id="cc-1-input" onInput={e => setInput(e.target.value)}></input>
                        <p>{currentDate}</p>
                        <div className="cc-1-action">
                            <button className="green-button" onClick={addNewItem}>Save</button>
                            <button className="red-button" onClick={cancelAddNew}>Cancel</button>
                        </div>
                    </div>
                    {newItems.map(item => <li key={newItems.indexOf(item)} className="content-column-listitem"><b>{item.name}</b>&nbsp; <p>{item.date}</p>
                        <div className="cc-1-action">
                            <button className="green-button" onClick={() => setFinishedTask(newItems.indexOf(item))}>Finished</button>
                            <button className="red-button" onClick={() => setAbortTask(newItems.indexOf(item))}>Abort</button>
                        </div>
                    </li>)}
                    <div className="add-new-todo" onClick={addNewTodo}>
                        Add New Task
                    </div>
                </div>
            </ul>
            <ul className="content-column" id="cc-2">
                <div className="cc-wrapper">
                    {finishedItems.map(item => <li key={finishedItems.indexOf(item)} className="content-column-listitem"><b>{item.name}</b>&nbsp; <p>{item.date}</p>
                        <div className="cc-2-action">
                            <p>Task was finished {currentDate}</p>
                        </div>
                    </li>)}
                </div>
            </ul>
            <ul className="content-column" id="cc-3">
                <div className="cc-wrapper">
                    {abortedItems.map(item => <li key={abortedItems.indexOf(item)} className="content-column-listitem"><b>{item.name}</b>&nbsp; <p>{item.date}</p>
                        <div className="cc-3-action">
                            <p>Task was aborted {currentDate}</p>
                        </div>
                    </li>)}
                </div>
            </ul>

        </div>
    )
}

export default Columns