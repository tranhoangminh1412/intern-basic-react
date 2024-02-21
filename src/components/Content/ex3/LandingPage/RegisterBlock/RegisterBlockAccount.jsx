import ErrorMessage from "./ErrorMessage";
import RegisterProgress from "./RegisterProgress";
import Users from "../../Users";
import { ReactDOM, useState } from "react";

function RegisterBlockAccount(props) {
  const {
    username,
    setUsername,
    password,
    setPassword,
    activePage,
    setLogin,
    setPage,
  } = props;
  const [usrFlag, setUsrFlag] = useState(false);
  const [passwordFlag, setPasswordFlag] = useState(false);
  const [passRepeat, setRepeat] = useState("");

  const handleChange = (event) => {
    Users.forEach((user) => {
      if (event.target.value == user.username) {
        console.log("first if");
        event.target.style.borderColor = "red";
        setUsrFlag(true);
      } else if (usrFlag) {
        setUsrFlag(false);
        event.target.style.borderColor = "#DCDCDC";
      }
    });
    console.log(event.target.value)
    setUsername(event.target.value);
  };

  function handleNextClick() {
    if (!username || !password || passwordFlag) {
      console.log("Invalid Fields");
      setUsrFlag(false);
    } else {
      console.log("SUCCSSS");
      setRepeat("");
      setPasswordFlag(false);
      setPage(2);
    }
  }

  const inputPassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const comparePassword = (event) => {
    setRepeat(event.target.value);
    if (password != event.target.value) {
      event.target.style.borderColor = "red";
      setPasswordFlag(true);
      return true;
    } else {
      event.target.style.borderColor = "#333";
      setPasswordFlag(false);
      return false;
    }
  };

  return (
    <div className="content-wrapper">
      <div className="login-register-block"></div>
      <div className="register-block">
        <h1 className="login-header">Register</h1>
        <RegisterProgress activePage={activePage} />
        <div className="register-input-block">
          <div className="register-input-block-item">
            <div className="register-input-block-item-textbox">
              <div className="require">Must</div>
              <div className="heading">Username</div>
            </div>
            <input
              onChange={handleChange}
              className="register-input-block-item-inputframe"
              value={username}
            />
            <ErrorMessage usrFlag={usrFlag} setUsrFlag={setUsrFlag} />
          </div>
          <div className="register-input-block-item">
            <div className="register-input-block-item-textbox">
              <div className="require">Must</div>
              <div className="heading">Password</div>
            </div>
            <input
              type="password"
              maxLength={32}
              onChange={inputPassword}
              className="register-input-block-item-inputframe"
              // value={"*".repeat(password.length)}
            />
          </div>
          <div className="register-input-block-item">
            <div className="register-input-block-item-textbox">
              <div className="require">Must</div>
              <div className="heading">Repeat Password</div>
            </div>
            <input
              type="password"
              maxLength={32}
              onChange={comparePassword}
              className="register-input-block-item-inputframe"
              // value={"*".repeat(passRepeat.length)}
            />
            <ErrorMessage
              passwordFlag={passwordFlag}
              setPasswordFlag={setPasswordFlag}
            />
          </div>
        </div>
        <div className="register-action">
          <button
            onClick={() => {
              handleNextClick();
            }}
            style={{ background: "#627D98", color: "var(--White, #FFF)" }}
            className="register-action-button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterBlockAccount;
