import AdminContent from "./AdminContent";
import AdminSidebar from "./AdminSidebar";

function AdminPage(props) {
  const { setActivePage, setLoading, setPopUp, activeUser } = props;

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar
        setActivePage={setActivePage}
        setLoading={setLoading}
        setPopUp={setPopUp}
        activeUser={activeUser}
      />
      <AdminContent />
    </div>
  );
}

export default AdminPage;
