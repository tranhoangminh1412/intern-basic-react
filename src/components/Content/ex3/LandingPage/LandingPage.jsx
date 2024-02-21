import { useState, useEffect, useMemo } from "react";
import Positions from "../Positions";
import Users from "../Users";
import LoginBlock from "./LoginBlock";
import RegisterBlock from "./RegisterBlock/RegisterBlock";
import Loading from "../Loading";

function LandingPage(props) {
  const [registerActive, setRegister] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [loginActive, setLogin] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const [reason, setReason] = useState("");
  const [salary, setSalary] = useState("");
  const { loading, setLoading, setPopUp, setActivePage,setActiveUser } = props;
  //   const [fields, setFields] = useState({ username: "hi", password: "hello" });

  //     const handleABC = () => {
  //         setFields((abc) => ({
  //             ...abc,
  //             username: 'abc'
  //         }))
  //     }

  // For reformatting, move all fields into an object like above.

  return (
    <div className="landingpage-body">
      {loginActive ? (
        <LoginBlock
          registerAcive={registerActive}
          setRegister={setRegister}
          setLogin={setLogin}
          loginSuccess={loginSuccess}
          setLoginSuccess={setLoginSuccess}
          setPopUp={setPopUp}
          setActivePage={setActivePage}
          setLoading={setLoading}
          setActiveUser={setActiveUser}
        />
      ) : (
        <></>
      )}
      {registerActive ? (
        <RegisterBlock
          setRegister={setRegister}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setLogin={setLogin}
          fullname={fullname}
          setFullname={setFullname}
          birthday={birthday}
          setBirthday={setBirthday}
          city={city}
          setCity={setCity}
          position={position}
          setPosition={setPosition}
          description={description}
          setDescription={setDescription}
          avatar={avatar}
          setAvatar={setAvatar}
          reason={reason}
          setReason={setReason}
          salary={salary}
          setSalary={setSalary}
          setRegisterSuccess={setRegisterSuccess}
          setLoading={setLoading}
          setPopUp={setPopUp}
          setActiveUser={setActiveUser}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default LandingPage;
