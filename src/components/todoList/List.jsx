

function List(props) {
    const itemList = props.items;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // fruits.sort((a,b) => a.calories - b.calories);
    // fruits.sort((a,b) => b.calories - a.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const listItems = itemList.map(item => <li key={item.id}> user 
    //     {item.userId}: &nbsp; <b>{item.title}</b> 
    //     <p className="completedItem">{item.completed ? 
    //      "status: completed" : ""}</p>
    //      <p className="incompleteItem">{item.completed ? 
    //      "": "status: incomplete"}</p>
    //      </li>);

    return (<>
        <ol>{itemList.map(item => <li key={item.id}> user
            {item.userId}: &nbsp; <b>{item.title}</b>
            <p className="completedItem">{item.completed ?
                "status: completed" : ""}</p>
            <p className="incompleteItem">{item.completed ?
                "" : "status: incomplete"}</p>
        </li>)}</ol>

    </>);
}

export default List