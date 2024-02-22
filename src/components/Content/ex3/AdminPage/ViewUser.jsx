import { useState } from "react";
import RegisterBlockAccount from "../LandingPage/RegisterBlock/RegisterBlockAccount";
import RegisterBlockProfile from "../LandingPage/RegisterBlock/RegisterBlockProfile";
import RegisterBlockFinished from "../LandingPage/RegisterBlock/RegisterBlockFinished";
import Users from "../Users";

function ViewUser(props) {
  const { viewUser, setViewUser, setLoading, setPopUp } = props;

  const [activePage, setActivePage] = useState(1);

  console.log("ViewUser viewUser: " + viewUser);

  function approveUser(){
    Users[viewUser.id-1].usertype = 'user'
    Users[viewUser.id-1].status = 'approved'
    setPopUp((abc) => ({
      ...abc,
      active: true,
      status: true,
      popUpMessage: 'Approved User'
    }))
    setViewUser({})
  }

  function rejectUser(){
    Users[viewUser.id-1].usertype = 'user'
    Users[viewUser.id-1].status = 'denied'
    setPopUp((abc) => ({
      ...abc,
      active: true,
      status: false,
      popUpMessage: 'Rejected User'
    }))
    setViewUser({})
  }

  return (
    <>
      <div className="admin-pagebackground">
        <div className="admin-pagecontainer">
          <div
            className="admin-pagecontent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img
              onClick={() => setViewUser({})}
              src="./src/assets/ArrowLeft.svg"
              alt="arrowLeft"
            />
            <div className="viewuser-info">
              <div style={{ gap: "10px", display: "flex" }}>
                <img
                  style={{ width: "48px", height: "48px", borderRadius: "5px" }}
                  src={viewUser.avatar}
                  alt="Avatar"
                />
                <div>
                  <p className="viewuser-name">{viewUser.fullname}</p>
                  <p className="viewuser-position">{viewUser.position}</p>
                </div>
              </div>
            </div>
            {activePage == 1 ? (
              <RegisterBlockAccount
                activePage={activePage}
                viewUser={viewUser}
                setActivePage={setActivePage}
              />
            ) : (
              <></>
            )}
            {activePage == 2 ? (
              <RegisterBlockProfile
                activePage={activePage}
                viewUser={viewUser}
                setActivePage={setActivePage}
              />
            ) : (
              <></>
            )}
            {activePage == 3 ? (
              <RegisterBlockFinished
                activePage={activePage}
                viewUser={viewUser}
                setActivePage={setActivePage}
              />
            ) : (
              <></>
            )}
            <div className="register-action" style={{position:'absolute',bottom:'0px'}}>
              <button
                onClick={() => {
                    approveUser()
                
                }}
                style={{ background: "#627D98", color: "var(--White, #FFF)" }}
                className="register-action-button"
              >
                Approve
              </button>
              <button
                onClick={() => {
                    rejectUser()
                }}
                style={{ background: "#FFF", border: "1px solid #DCDCDC" }}
                className="register-action-button"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
