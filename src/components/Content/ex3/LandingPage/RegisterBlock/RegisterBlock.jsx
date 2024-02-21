import { useState } from "react";
import RegisterBlockAccount from "./RegisterBlockAccount";
import RegisterBlockProfile from "./RegisterBlockProfile";
import RegisterBlockFinished from "./RegisterBlockFinished";

function RegisterBlock(props) { 
  let newUser = {username:"",password:"",}

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
    setPopUp,
    setActiveUser,
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
          newUser={newUser}
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
          newUser={newUser}

        />
      ) : (
        ""
      )}
      {activePage == 3 ? (
        <RegisterBlockFinished
          avatar={avatar}
          username={username}
          password={password}
          fullname={fullname}
          birthday={birthday}
          city={city}
          position={position}
          description={description}
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
          setActiveUser={setActiveUser}
          newUser={newUser}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default RegisterBlock;
