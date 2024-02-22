import { useState } from "react";

function AdminSidebar(props) {
  const { setActivePage, activeUser, setViewUser, setLoading, setPopUp } =
    props;

  const [active, setActive] = useState(1);

  function logout() {
    setLoading(true);
    setPopUp((abc) => ({
      ...abc,
      active: true,
      status: true,
      popUpMessage: 'Logout Successful!'
    }))
    setViewUser({});
    setActivePage(0);
  }

  return (
    <div className="admin-sidebar">
      <div className="sidebar-info-block">
        <img
          className="sidebar-info-avatar"
          src="./intern-basic-react/src/assets/defaultava.png"
          alt=""
        />
        <p className="sidebar-info-fullname">{activeUser.fullname}</p>
        {activeUser.position ? (
          <p className="sidebar-info-role">{activeUser.position}</p>
        ) : (
          <></>
        )}
      </div>
      <div className="sidebar-item-block">
        <div
          onClick={() => setActive(1)}
          className={active == 1 ? "sidebar-item-active" : "sidebar-item"}
        >
          <p className="sidebar-item-text">Requests</p>
        </div>
        <div
          onClick={() => logout()}
          className={active == 2 ? "sidebar-item-active" : "sidebar-item"}
        >
          <p className="sidebar-item-text">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
