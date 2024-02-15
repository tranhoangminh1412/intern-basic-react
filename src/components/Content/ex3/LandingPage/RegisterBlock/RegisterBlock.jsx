import { useState } from "react";
import RegisterBlockAccount from "./RegisterBlockAccount";
import RegisterBlockProfile from "./RegisterBlockProfile";
import RegisterBlockFinished from "./RegisterBlockFinished";

function RegisterBlock(props) {
  const {
    setRegister,
    setLogin,
    username,
    setUsername,
    password,
    setPassword,
    fullname,
    setFullname,
    birthday,
    setBirthday,
    city,
    setCity,
    position,
    setPosition,
    description,
    setDescription,
    avatar,
    setAvatar,
    reason,
    setReason,
    salary,
    setSalary,
    setRegisterSuccess,
    setLoading,
    setPopUp
  } = props;
  const [activePage, setPage] = useState(1);

  return (
    <>
      {activePage == 1 ? (
        <RegisterBlockAccount
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          activePage={activePage}
          setLogin={setLogin}
          setPage={setPage}
        />
      ) : (
        ""
      )}
      {activePage == 2 ? (
        <RegisterBlockProfile
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
          activePage={activePage}
          setLogin={setLogin}
          setPage={setPage}
        />
      ) : (
        ""
      )}
      {activePage == 3 ? (
        <RegisterBlockFinished
          setRegister={setRegister}
          reason={reason}
          setReason={setReason}
          salary={salary}
          setSalary={setSalary}
          activePage={activePage}
          setLogin={setLogin}
          setPage={setPage}
          setRegisterSuccess={setRegisterSuccess}
          setLoading={setLoading}
          setPopUp={setPopUp}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default RegisterBlock;
