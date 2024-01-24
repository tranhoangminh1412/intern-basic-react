// import Card from "./Card.jsx";
// import Button from "./Button.jsx";
// import Student from "./Student.jsx";
// import UserGreeting from "./UserGreeting.jsx";
import List from "./components/Sidebar/components/todoList/List.jsx";
import ListItem from "./components/Sidebar/components/todoList/ListItem.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content.jsx";
import { useState } from "react";

function App() {

  const [activeId,setActiveId] = useState(1)

  const sidebarItems = [
    { id: 1, name: "Home"},
    { id: 2, name: "Todo List"},
    { id: 3, name: "Todo App"},
    { id: 4, name: "Bai 3"},
  ]

  return (
    // <List items={ListItem} category="Todos"></List>
    <div className="app">
      <Sidebar className="sidebar" activeId={activeId} setActiveId={setActiveId} items={sidebarItems} category="Basic Exercise" />
      <Content activeId = {activeId} category={sidebarItems[activeId-1].name}/>
    </div>
  );
}

export default App
