import { useState } from "react";
import LandingPage from "./LandingPage/LandingPage";
import Loading from "./Loading";
import Popup from "./Popup";

function FormApp() {
  const [loading, setLoading] = useState(false);
  const [popUp, setPopUp] = useState({ active: false, status: true, popUpMessage:''});

  return (
    <>
      <Loading loading={loading} setLoading={setLoading} />
      <LandingPage loading={loading} setLoading={setLoading} setPopUp={setPopUp} />
      <Popup popUp={popUp} setPopUp={setPopUp} />
    </>
  );
}

export default FormApp;
