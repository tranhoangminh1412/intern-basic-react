import { useRef, useState } from "react";
import Positions from "./Positions";
import Users from "./Users";
import LoginBlock from "./LoginBlock";
import RegisterBlock from "./RegisterBlock";

function LandingPage() {

    const [registerActive, setRegister] = useState(false)
    const [loginActive, setLogin] = useState(true)
    const [loginSuccess, setLoginSuccess] = useState(false)
    const username = useRef()
    const password = useRef()
    const fullname = useRef()
    const birthday = useRef()
    const city = useRef()
    const position = useRef()
    const description = useRef()
    const avatar = useRef()
    const reason = useRef()
    const salary = useRef()

    // if (!fullname.current && !password.current && !fullname.current && !birthday.current && !reason.current && !salary.current && registerActive) {
    //     console.log('register success!')
    // }

    return (
        <div className="landingpage-body">
            {loginActive ? <LoginBlock registerAcive={registerActive} setRegister={setRegister}
                loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} /> : <></>}
            {registerActive ? <RegisterBlock setRegister={setRegister} username={username} password={password} setLogin={setLogin}
                fullname={fullname} birthday={birthday} city={city} position={position} description={description} avatar={avatar}
                reason={reason} salary={salary}
            /> : <></>}
        </div>
    )
}

export default LandingPage