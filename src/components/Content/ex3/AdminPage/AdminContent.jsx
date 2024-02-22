import RequestList from "./RequestList";

function AdminContent(props) {
  const { setLoading, setPopUp, viewUser, setViewUser } = props;

  return (
    <div className="admin-pagebackground">
      <div className="admin-pagecontainer">
        <div className="admin-pagecontent">
          <div className="admin-requestlist-container">
            <div className="admin-requestlist-header-container">
              <div className="admin-requestlist-header-standin" />
              <div className="admin-requestlist-header-fullname">
                <p className="admin-requestlist-header-text">Fullname</p>
              </div>
              <div className="admin-requestlist-header-city">
                <p className="admin-requestlist-header-text">City</p>
              </div>
              <div className="admin-requestlist-header-salary">
                <p className="admin-requestlist-header-text">Wish Salary</p>
              </div>
              <div className="admin-requestlist-header-timecreated">
                <p className="admin-requestlist-header-text">Created at</p>
              </div>
              <div className="admin-requestlist-header-status">
                <p className="admin-requestlist-header-text">Status</p>
              </div>
            </div>
            <RequestList viewUser={viewUser} setViewUser={setViewUser} setLoading={setLoading} />
          </div>
          <div
            style={{ alignContent: "end", gap: "56px", alignItems: "center" }}
          >
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminContent;
