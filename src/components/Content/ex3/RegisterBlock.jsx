import Users from "./Users";

function RegisterBlock(props) {
    const {setLogin} = props
    setLogin(false)

    return(
        <div className="content-wrapper">
            <div className="login-register-block"></div>
            <div className="register-block">
                <h1 className="login-header">Register</h1>
                <div style={{display: 'flex'}}>
                    <div className="register-progress-block">
                        <div className="register-progress-block-icon">1</div>
                        <div className="register-progress-block-heading">Account</div>
                    </div>
                    <div className="register-progress-block">
                        <div className="register-progress-block-icon">2</div>
                        <div className="register-progress-block-heading">Profile</div>
                    </div>
                    <div className="register-progress-block">
                        <div className="register-progress-block-icon">3</div>
                        <div className="register-progress-block-heading">Finished</div>
                    </div>
                </div>
                <div className="register-input-block">
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                        <div className="require">Must</div>
                        <div className="heading">Fullname</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterBlock