import ListItem from "../Sidebar/components/todoList/ListItem";
import List from "../Sidebar/components/todoList/List";
import Home from "../Sidebar/components/Home";
import Columns from "./ex2/Columns";
import LandingPage from "./ex3/LandingPage/LandingPage";
import FormApp from "./ex3/FormApp";

function Content(props) {
  let category = props.category;
  let contents = props.items;

  return (
    <div className="Content">
      {props.activeId == 1 ? <Home></Home> : ""}
      {props.activeId == 2 ? <List items={ListItem} /> : ""}
      {props.activeId == 3 ? <Columns /> : ""}
      {props.activeId == 4 ? <FormApp /> : ""}
    </div>
  );
}

export default Content;
