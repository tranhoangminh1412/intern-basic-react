import { useRef, useState } from "react"
import RegisterBlockAccount from "./RegisterBlockAccount"
import RegisterBlockProfile from "./RegisterBlockProfile"
import RegisterBlockFinished from "./RegisterBlockFinished"

function RegisterBlock(props) {
    const {setRegister,setLogin,username,password,fullname,birthday,city,position,description,avatar,reason,salary} = props
    const [activePage,setPage] = useState(1)

    return(
        <>
        {activePage == 1 ? <RegisterBlockAccount username={username} password={password} activePage = {activePage} setLogin = {setLogin} setPage = {setPage} /> : ''}
        {activePage == 2 ? <RegisterBlockProfile fullname={fullname} birthday={birthday} city={city} position={position}description={description}avatar={avatar} activePage = {activePage} setLogin = {setLogin} setPage = {setPage} /> : ''}
        {activePage == 3 ? <RegisterBlockFinished setRegister={setRegister} reason={reason} salary={salary} activePage = {activePage} setLogin = {setLogin} setPage = {setPage} /> : ''}
        </>
    )
}

export default RegisterBlock