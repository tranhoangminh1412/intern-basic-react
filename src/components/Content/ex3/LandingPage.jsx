import { useState } from "react";
import Positions from "./Positions";
import Users from "./Users";
import LoginBlock from "./LoginBlock";
import RegisterBlock from "./RegisterBlock";

function LandingPage() {

    const [registerActive,setRegister] = useState(false)
    const [loginActive,setLogin] = useState(true)
    const [loginSuccess,setLoginSuccess] = useState(false)

    return (
        <div className="landingpage-body">
            {loginActive ? <LoginBlock registerAcive = {registerActive} setRegister = {setRegister} loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess}/> : <></>}
            {/* {loginSuccess && !registerActive ? console.log("Sucess") : console.log("Failed")} */}
            {registerActive ? <RegisterBlock setLogin={setLogin}/> : <></>}
        </div>
    )
}

export default LandingPage