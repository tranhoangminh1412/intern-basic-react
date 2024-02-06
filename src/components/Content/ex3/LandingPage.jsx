import { useState } from "react";
import Positions from "./Positions";
import Users from "./Users";
import LoginBlock from "./LoginBlock";
import RegisterBlock from "./RegisterBlock";

function LandingPage() {

    const [registerActive, setRegister] = useState(false)
    const [loginActive, setLogin] = useState(true)
    const [loginSuccess, setLoginSuccess] = useState(false)
    // const username = useRef()
    // const password = useRef()
    // const fullname = useRef()
    // const birthday = useRef()
    // const city = useRef()
    // const position = useRef()
    // const description = useRef()
    // const avatar = useRef()
    // const reason = useRef()
    // const salary = useRef()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [fullname,setFullname] = useState('')
    const [birthday,setBirthday] = useState('')
    const [city,setCity] = useState('')
    const [position,setPosition] = useState('')
    const [description,setDescription] = useState('')
    const [avatar,setAvatar] = useState('')
    const [reason,setReason] = useState('')
    const [salary,setSalary] = useState('')

    return (
        <div className="landingpage-body">
            {loginActive ? <LoginBlock registerAcive={registerActive} setRegister={setRegister} setLogin={setLogin}
                loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} /> : <></>}
            {registerActive ? <RegisterBlock setRegister={setRegister} username={username} setUsername={setUsername} password={password} setPassword={setPassword}
             setLogin={setLogin} fullname={fullname} setFullname={setFullname} birthday={birthday} setBirthday={setBirthday} city={city} 
             setCity={setCity} position={position} setPosition={setPosition} description={description} setDescription={setDescription} 
             avatar={avatar} setAvatar={setAvatar} reason={reason} setReason={setReason} salary={salary} setSalary={setSalary}
            /> : <></>}
        </div>
    )
}

export default LandingPage