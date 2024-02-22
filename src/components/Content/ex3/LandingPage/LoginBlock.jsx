import Users from "../Users";

function LoginBlock(props) {
  const {
    registerActive,
    setRegister,
    loginSuccess,
    setLoginSuccess,
    setLogin,
    setPopUp,
    setLoading,
    setActivePage,
    setActiveUser,
  } = props;

  function validateLogin() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;


    Users.forEach((user) => {
      if (username == user.username) {
        if (password == user.password) {
          setActiveUser(user);
          setLoading(true);
          setPopUp((abc) => ({
            ...abc,
            active: true,
            status: true,
            popUpMessage: "Login Successful!",
          }));
          Users.forEach((user) => {
            if (username == user.username && user.usertype == "admin") {
              setActivePage(1);
            } else {
              setLoginSuccess(true);
            }
          });
        } else {
          setPopUp((abc) => ({
            ...abc,
            active: true,
            status: false,
            popUpMessage: "Login Unsuccessful!",
          }));
        }
      } else {
        setPopUp((abc) => ({
          ...abc,
          active: true,
          status: false,
          popUpMessage: "No user found with this username",
        }));      }
    });
  }

  return (
    <div className="content-wrapper">
      <div className="login-register-block">
        <div className="login-register-prompt-block">
          <div className="login-register-prompt-block-heading">
            Don't have an account?
          </div>
          <div
            className="login-register-prompt-block-button"
            onClick={() => {
              setRegister(true);
              setLogin(false);
            }}
          >
            Register
          </div>
        </div>
      </div>
      <div className="login-block">
        <h1 className="login-header">Login</h1>
        <div className="login-block-frame">
          <input
            type="landing"
            className="login-block-inputfield"
            id="login-username"
            placeholder="Username"
          />
          <input
            type="landing"
            className="login-block-inputfield"
            id="login-password"
            placeholder="Password"
          />
          <div className="login-block-button" onClick={() => validateLogin()}>
            Log In
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBlock;
