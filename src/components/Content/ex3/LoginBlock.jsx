import Users from "./Users"

function LoginBlock(props) {
    const {registerActive,setRegister,loginSuccess,setLoginSuccess,setLogin} = props

    function validateLogin() {
        const username = document.getElementById("login-username").value
        const password = document.getElementById("login-password").value

        console.log("username: " +username);
        console.log("password: " +password);

        Users.forEach(user => {
            if (username == user.username) {
                if (password == user.password) {
                    console.log("Login successful");
                    setLoginSuccess(true)
                    console.log(loginSuccess);
                }
                else{
                    console.log("Wrong password");
                }
            }
            else {
                console.log("No user found with this username");
            }
        });
    }

    return (
        <div className="content-wrapper">
            <div className="login-register-block">
                <div className="login-register-prompt-block">
                    <div className="login-register-prompt-block-heading">Don't have an account?</div>
                    <div className="login-register-prompt-block-button" onClick={() => {setRegister(true);setLogin(false)}}>Register</div>
                </div>
            </div>
            <div className="login-block">
                <h1 className="login-header">Login</h1>
                <div className="login-block-frame">
                    <input type="landing" className="login-block-inputfield" id="login-username" placeholder="Username" />
                    <input type="landing" className="login-block-inputfield" id="login-password" placeholder="Password" />
                    <div className="login-block-button" onClick={() => validateLogin()}>Log In</div>
                </div>
            </div>
        </div>)
}

export default LoginBlock