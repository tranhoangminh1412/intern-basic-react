import { useState } from "react";
import Users from "../Users";
import moment from "moment";

function RequestList(props) {
  const { viewUser, setViewUser,setLoading } = props;

  const userList = Users.filter((user) => user.usertype !== "admin");

  function getColor(status) {
    if (status == "approved") {
      return "#F0F4F8";
    } else if (status == "pending") {
      return "#FFFBEB";
    } else {
      return "#FFE3E3";
    }
  }

  function getColorText(status) {
    if (status == "approved") {
      return "#627D98";
    } else if (status == "pending") {
      return "#DD901D";
    } else {
      return "#F86A6A";
    }
  }

  function getUser(e) {
    setLoading(true)
    setViewUser(Users[e - 1]);
  }

  return userList.map((item) => (
    <div
      key={item.id}
      id={item.id}
      onClick={() => getUser(item.id)}
      className="admin-requestlist-wrapper"
      style={{ cursor: "pointer" }}
    >
      <div className="admin-requestlist-header-standin" />
      <div style={{ alignSelf: "center" }}>
        <div className="requestlist-maintext">{item.fullname}</div>
        <div className="requestlist-position">{item.position}</div>
      </div>
      <div className="requestlist-maintext">{item.city}</div>
      <div className="requestlist-maintext">{item.salary}</div>
      <div className="requestlist-maintext">{item.creationtime}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ background: getColor(item.status) }}
          className="requestlist-status"
        >
          <div style={{ color: getColorText(item.status) }}>{item.status}</div>
        </div>
      </div>
    </div>
  ));
}

export default RequestList;
