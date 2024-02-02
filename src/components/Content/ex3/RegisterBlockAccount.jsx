import RegisterProgress from "./RegisterProgress"

function RegisterBlockAccount(props) {
    const { username, password, activePage, setLogin, setPage } = props
    setLogin(false)

    return (
        <div className="content-wrapper">
            <div className="login-register-block"></div>
            <div className="register-block">
                <h1 className="login-header">Register</h1>
                <RegisterProgress activePage = {activePage} />
                <div className="register-input-block">
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="require">Must</div>
                            <div className="heading">Username</div>
                        </div>
                        <input ref={username} className="register-input-block-item-inputframe"></input>
                    </div>
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="require">Must</div>
                            <div className="heading">Password</div>
                        </div>
                        <input className="register-input-block-item-inputframe"></input>
                    </div>
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="require">Must</div>
                            <div className="heading">Repeat Password</div>
                        </div>
                        <input ref={password} className="register-input-block-item-inputframe"></input>
                    </div>
                </div>
                <div className="register-action">
                    <button onClick={() => { setPage(2) }} style={{ background: '#627D98', color: 'var(--White, #FFF)' }} className="register-action-button">Next</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterBlockAccount