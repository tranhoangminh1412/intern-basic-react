import { useState } from "react";
import LandingPage from "./LandingPage/LandingPage";
import Loading from "./Loading";
import Popup from "./Popup";
import AdminPage from "./AdminPage/AdminPage";
import Users from "./Users";

function FormApp() {
  const [loading, setLoading] = useState(false);
  const [popUp, setPopUp] = useState({
    active: false,
    status: true,
    popUpMessage: "",
  });
  const [activePage, setActivePage] = useState(0);
  const [activeUser, setActiveUser] = useState({});
  const [viewUser, setViewUser] = useState({});

  return (
    <>
      <Loading loading={loading} setLoading={setLoading} />
      {activePage == 0 ? (
        <LandingPage
          loading={loading}
          setLoading={setLoading}
          setPopUp={setPopUp}
          setActiveUser={setActiveUser}
          setActivePage={setActivePage}
          viewUser={viewUser}
          setViewUser={setViewUser}
        />
      ) : (
        <></>
      )}
      {activePage == 1 ? (
        <AdminPage
          loading={loading}
          setLoading={setLoading}
          setPopUp={setPopUp}
          setActivePage={setActivePage}
          activeUser={activeUser}
          viewUser={viewUser}
          setViewUser={setViewUser}
        />
      ) : (
        <></>
      )}
      <Popup popUp={popUp} setPopUp={setPopUp} />
    </>
  );
}

export default FormApp;
