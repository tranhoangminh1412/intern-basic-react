import { useState } from "react";
import RegisterProgress from "./RegisterProgress";
import Users from "../../Users";
import moment from "moment";

function RegisterBlockFinished(props) {
  const {
    username,
    password,
    avatar,
    fullname,
    birthday,
    city,
    position,
    description,
    setRegister,
    reason,
    setReason,
    salary,
    setSalary,
    activePage,
    setLogin,
    setPage,
    setRegisterSuccess,
    setLoading,
    setPopUp,
    viewUser,
    setViewUser,
    setActivePage,
  } = props;

  const [salaryFlag, setSalaryFlag] = useState(false);

  function handleFinishRegister() {
    const formattedDate = moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    if (reason && salary) {
      setLogin(true);
      setRegister(false);
      setRegisterSuccess(true);
      setLoading(true);
      setPopUp((abc) => ({
        ...abc,
        active: true,
        status: true,
        popUpMessage: "Register Successful!",
      }));
      const newObject = {
        id: Users.length + 1,
        username: username,
        password: password,
        fullname: fullname,
        birthday: birthday,
        city: city,
        position: position,
        description: description,
        avatar: avatar,
        status: "pending",
        creationtime: formattedDate,
      };
      Users.push(newObject);
    }
  }

  function getSalary(value) {
    const salaryRegex = /^\d{1,9}$/;
    if (salaryRegex.test(value)) {
      setSalary(value);
      setSalaryFlag(false);
    } else {
      setSalaryFlag(true);
    }
  }

  if (Object.keys(viewUser).length !== 0) {
    return (
      <div
        className="content-wrapper"
        style={{
          position: "unset",
          padding: "unset",
          justifyContent: "unset",
          justifyItems: "unset",
        }}
      >
        <div
          className="register-block"
          style={{
            position: "unset",
            width: "-webkit-fill-available",
            height: "auto",
          }}
        >
          <RegisterProgress activePage={activePage} />
          <div className="register-input-block">
            <div className="register-input-block-item">
              <div className="register-input-block-item-textbox">
                <div className="heading">Reason</div>
              </div>
              <div className="register-input-block-item-inputframe">
                {viewUser.reason}
              </div>
            </div>
            <div className="register-input-block-item">
              <div className="register-input-block-item-textbox">
                <div className="heading">Wish salary</div>
              </div>

              <div
                style={{ width: "max-content" }}
                className="register-input-block-item-inputframe"
              >
                {viewUser.salary}
                <p className="wish-salary-text"> VNĐ</p>
              </div>
            </div>
          </div>
          <div className="register-action">
            <button
              onClick={() => {
                setActivePage(2);
              }}
              style={{ background: "#FFF", border: "1px solid #DCDCDC" }}
              className="register-action-button"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

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
              <div className="heading">Reason</div>
            </div>
            <div>
              <textarea
                maxLength={1000}
                className="register-input-block-item-inputframe"
                style={{
                  width: "428px",
                  height: "10em",
                  alignContent: "baseline",
                  alignItems: "baseline",
                }}
                onInput={(e) => setReason(e.target.value)}
                value={reason}
              />
            </div>
          </div>
          <div className="register-input-block-item">
            <div className="register-input-block-item-textbox">
              <div className="require">Must</div>
              <div className="heading">Wish salary</div>
            </div>

            <div
              style={{ width: "max-content" }}
              className="register-input-block-item-inputframe"
            >
              <input
                className="wish-salary-text"
                style={{ width: "75px", border: "none" }}
                placeholder="10000000"
                onInput={(e) => getSalary(e.target.value)}
                value={salary}
              />
              <p
                className="input-error-message"
                style={{ display: salaryFlag ? "unset" : "none" }}
              >
                Invalid Salary Number
              </p>
              <p className="wish-salary-text"> VNĐ</p>
            </div>
          </div>
        </div>
        <div className="register-action">
          <button
            onClick={() => {
              handleFinishRegister();
            }}
            style={{ background: "#627D98", color: "var(--White, #FFF)" }}
            className="register-action-button"
          >
            Finish
          </button>
          <button
            onClick={() => {
              setPage(2);
            }}
            style={{ background: "#FFF", border: "1px solid #DCDCDC" }}
            className="register-action-button"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterBlockFinished;
