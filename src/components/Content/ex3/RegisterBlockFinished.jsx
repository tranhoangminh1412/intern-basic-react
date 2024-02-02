import RegisterProgress from "./RegisterProgress"

function RegisterBlockFinished(props) {
    const { setRegister,reason, salary, activePage, setLogin, setPage } = props

    setLogin(false)

    function handleFinishRegister(){
        setLogin(true)
        setRegister(true)
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
                            <input ref={reason} maxLength={1000} className="register-input-block-item-inputframe"
                                style={{ width: '428px', height: '10em', alignContent: 'baseline', alignItems: 'baseline' }} />
                        </div>
                    </div>
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="require">Must</div>
                            <div className="heading">Wish salary</div>
                        </div>

                        <div style={{ width: 'max-content' }} className="register-input-block-item-inputframe">
                            <input ref={salary} className="wish-salary-text" style={{ width: '70px', border: 'none' }} placeholder="10000000">
                            </input>
                            <p className="wish-salary-text"> VNĐ</p>
                        </div>
                    </div>
                </div>  
                <div className="register-action">
                    <button onClick={() => { () => handleFinishRegister() }} style={{ background: '#627D98', color: 'var(--White, #FFF)' }} className="register-action-button">Next</button>
                    <button onClick={() => { setPage(2) }} style={{ background: '#FFF', border: '1px solid #DCDCDC' }} className="register-action-button">Back</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterBlockFinished