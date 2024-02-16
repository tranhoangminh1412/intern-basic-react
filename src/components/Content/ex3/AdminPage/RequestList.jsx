import { useState } from "react";
import Users from "../Users";

function RequestList(props) {
  let userList = [...Users];

  userList.splice(0, 1);

  function getColor(status) {
    if(status == "approved"){
        return "#F0F4F8"
    }
    else if(status == "pending"){
        return "#FFFBEB"
    }
    else{
        return "#FFE3E3"
    }
  }

  function getColorText(status) {
    if(status == "approved"){
        return "#627D98"
    }
    else if(status == "pending"){
        return "#DD901D"
    }
    else{
        return "#F86A6A"
    }
  }

  return userList.map((item) => (
    <div key={item.id} className="admin-requestlist-wrapper">
      <div className="admin-requestlist-header-standin" />
      <div style={{alignSelf: "center"}}>
        <p className="requestlist-maintext">{item.fullname}</p>
        <p className="requestlist-position">{item.position}</p>
      </div>
      <p className="requestlist-maintext">{item.city}</p>
      <p className="requestlist-maintext">{item.salary}</p>
      <p className="requestlist-maintext">
        {item.birthday.format()}
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{background: getColor(item.status)}} className="requestlist-status">
          <p style={{color:getColorText(item.status)}}>{item.status}</p>
        </div>
      </div>
    </div>
  ));
}

export default RequestList;
