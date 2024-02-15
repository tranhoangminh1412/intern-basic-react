import ErrorMessage from "./ErrorMessage"
import RegisterProgress from "./RegisterProgress"
import Users from "../../Users"
import { ReactDOM, useState } from "react"

function RegisterBlockAccount(props) {
    const { username, setUsername, password, setPassword, activePage, setLogin, setPage } = props
    const [usrFlag,setUsrFlag] = useState(false)
    const [passwordFlag,setPasswordFlag] = useState(false)
    const [repeat,setRepeat] = useState('')

    const handleChange = (event) => {
        Users.forEach(user => {
            if (event.target.value == user.username) {
                console.log('first if')
                event.target.style.borderColor = "red"
                setUsrFlag(true)
            }
            else if(usrFlag){
                setUsrFlag(false)
                event.target.style.borderColor = "#DCDCDC"
            }
        });
        setUsername(event.target.value)
    }

    function handleNextClick() {
        if(!username || !password || passwordFlag || !repeat){
            console.log("Invalid Fields")
            setUsrFlag(false)

        }
        else {
            console.log("SUCCSSS")
            setPage(2)
        }
    }

    const inputPassword = (event) => {
        setPassword(event.target.value)
    }

    const comparePassword = (event) => {
        if(password != event.target.value){
            event.target.style.borderColor = "red"
            setPasswordFlag(true)
        }
        else{
            event.target.style.borderColor = "#333"
            setPasswordFlag(false)
        }
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
                            <div className="heading">Username</div>
                        </div>
                        <input onChange={handleChange} className="register-input-block-item-inputframe"></input>
                        <ErrorMessage usrFlag={usrFlag} setUsrFlag={setUsrFlag} />
                    </div>
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="require">Must</div>
                            <div className="heading">Password</div>
                        </div>
                        <input onChange={inputPassword} className="register-input-block-item-inputframe"></input>
                    </div>
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="require">Must</div>
                            <div className="heading">Repeat Password</div>
                        </div>
                        <input maxLength={32} onChange={comparePassword} className="register-input-block-item-inputframe" onInput={(e) => setRepeat(e)} />
                        <ErrorMessage passwordFlag={passwordFlag} setPasswordFlag={setPasswordFlag} />
                    </div>
                </div>
                <div className="register-action">
                    <button onClick={() => { handleNextClick() }} style={{ background: '#627D98', color: 'var(--White, #FFF)' }} className="register-action-button">Next</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterBlockAccount