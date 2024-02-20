import ListItem from "../Sidebar/components/todoList/ListItem";
import List from "../Sidebar/components/todoList/List";
import Home from "../Sidebar/components/Home";
import Columns from "./ex2/Columns";
import LandingPage from "./ex3/LandingPage/LandingPage";
import FormApp from "./ex3/FormApp";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

function Content(props) {
  const { category, contents, activeId } = props;

  return (
    <div className="Content">
      {/* <Routes>
        <Route>{activeId == 1 ? <Home></Home> : ""}</Route>
        <Route>{activeId == 2 ? <List items={ListItem} /> : ""}</Route>
        <Route>{activeId == 3 ? <Columns /> : ""}</Route>
        <Route>{activeId == 4 ? <FormApp /> : ""}</Route>
      </Routes> */}

      {activeId == 1 ? <Home></Home> : ""}
      {activeId == 2 ? <List items={ListItem} /> : ""}
      {activeId == 3 ? <Columns /> : ""}
      {activeId == 4 ? <FormApp /> : ""}
    </div>
  );
}

export default Content;
