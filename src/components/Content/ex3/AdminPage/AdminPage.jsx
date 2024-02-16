import AdminContent from "./AdminContent";
import Sidebar from "./Sidebar";

function AdminPage(props) {
  const { setActivePage, setLoading, setPopUp, activeUser } = props;

  return (
    <>
      <Sidebar
        setActivePage={setActivePage}
        setLoading={setLoading}
        setPopUp={setPopUp}
        activeUser={activeUser}
      />
      <AdminContent />
    </>
  );
}

export default AdminPage;
