// import Card from "./Card.jsx";
// import Button from "./Button.jsx";
// import Student from "./Student.jsx";
// import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ListItem from "./ListItem.jsx";

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                {id: 2, name: "orange", calories: 45}, 
                {id: 3, name: "banana", calories: 135}, 
                {id: 4, name: "coconut", calories: 105}, 
                {id: 5, name: "pineapple", calories: 35}];

  

  return (
    <List items={ListItem} category="Todos"></List>
  );
}

export default App
