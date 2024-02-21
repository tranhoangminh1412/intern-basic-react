import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content.jsx";
import { useState } from "react";
import React from "react";
import { Outlet} from "react-router-dom";

function App() {

  const [activeId, setActiveId] = useState(1);

  const currentUrl = window.location.href;
  console.log(currentUrl);
  const match = currentUrl.match(/\/contents\/(\d+)/);
//   const number = match[1];

// if (match && activeId != number) {
//   // Extract the number from the matched string
//   setActiveId(number);
// } 

  // const {sidebarItems} = useLoaderData();

  const sidebarItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Todo List" },
    { id: 3, name: "Todo App" },
    { id: 4, name: "Request Form System" },
  ];

  return (
    <>
      <div className="app">
        <nav>
          <Sidebar
            className="sidebar"
            activeId={activeId}
            setActiveId={setActiveId}
            items={sidebarItems}
            category="Basic Exercise"
          />
        </nav>
        <Content
          activeId={activeId}
          category={sidebarItems[activeId - 1].name}
        />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
