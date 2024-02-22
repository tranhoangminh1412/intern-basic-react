import { useState } from "react";
import AdminContent from "./AdminContent";
import AdminSidebar from "./AdminSidebar";
import ViewUser from "./ViewUser";

function AdminPage(props) {
  const { setActivePage, setLoading, setPopUp, activeUser, viewUser, setViewUser } = props;

  return (
    <div style={{ display: "flex", height:'100vh' }}>
      <AdminSidebar
        setActivePage={setActivePage}
        setLoading={setLoading}
        setPopUp={setPopUp}
        activeUser={activeUser}
        setViewUser={setViewUser}
      />
      {Object.keys(viewUser).length == 0 ? <AdminContent viewUser={viewUser} setViewUser={setViewUser} setLoading={setLoading} /> : <></>}
      {Object.keys(viewUser).length !== 0 ? <ViewUser viewUser={viewUser} setViewUser={setViewUser} setLoading={setLoading} setPopUp={setPopUp} /> : <></>}
    </div>
  );
}

export default AdminPage;
