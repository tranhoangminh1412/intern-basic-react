import Users from "./Users";
import React, { useState } from "react";
import { ReactDOM } from "react";
import Describe from "./Describe";
import DragnDrop from "./DragnDrop";
import RegisterProgress from "./RegisterProgress";
import ErrorMessage from "./ErrorMessage";

function RegisterBlockProfile(props) {
    const { fullname, setFullname, birthday, setBirthday, city, setCity, position, setPosition, description,
        setDescription, avatar, setAvatar, activePage, setLogin, setPage } = props
    setLogin(false)

    const [nameFlag, setNameFlag] = useState(false)
    const [birthdayFlag, setBirthdayFlag] =  useState(false)

    const getName = (event) => {
        setFullname(event.target.value)
        const nonAlphabeticRegex = /[^a-zA-Z]/;
        setNameFlag(nonAlphabeticRegex.test(event.target.value))
        if(nameFlag){
            event.target.style.borderColor = "red"
        }
        else{
            event.target.style.borderColor = "#DCDCDC"
        }
    }

    const getBirthday = (event) => {
        console.log(event.target.value)
        setBirthday(event.target.value)
        const dateRegex = /^(19|20)\d\d\/([0-2][1-9]|3[0-1])\/(0[1-9]|1[0-2])$/;
        setBirthdayFlag(dateRegex.test(event.target.value))
        if(!birthdayFlag){
            console.log("WHAT THE FUCK")
            event.target.parentNode.style.borderColor = "red"
        }
        else{
            console.log('WHY')
            event.target.parentNode.style.borderColor = "#DCDCDC"
        }
    }

    const getCity = (event) => {
        setCity(event.target.value)
    }

    const getPosition = (event) => {
        setPosition(event.target.value)
    }

    const getDescription = (event) => {
        setDescription(event.target.value)
    }

    const [usrFlag, setUsrFlag] = useState(false)

    function handleNextClick() {
        if (usrFlag) {
            console.log("Invalid Fields")
            setUsrFlag(false)

        }
        else {
            console.log("SUCCSSS")
            setPage(2)
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
                            <div className="heading">Fullname</div>
                        </div>
                        <input onChange={getName} className="register-input-block-item-inputframe"></input>
                        <ErrorMessage nameFlag={nameFlag} />
                    </div>

                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="require">Must</div>
                            <div className="heading">Birthday</div>
                        </div>

                        <div style={{ width: 'max-content' }} className="register-input-block-item-inputframe">
                            <input onChange={getBirthday} style={{ width: '70px', border: 'none' }} placeholder="0000/00/00">
                            </input>
                            <img style={{}} src="./src/assets/calendar.svg" alt=""></img>
                        </div>
                        <ErrorMessage birthdayFlag={birthdayFlag} />
                    </div>


                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="heading">City</div>
                        </div>

                        <div style={{ position: 'relative' }} className="register-input-block-item-inputframe">
                            Hà Nội
                            <img style={{ position: 'absolute', right: '5px' }} src="./src/assets/CaretDown.svg" alt="" className="city-caretdown"></img>
                        </div>

                    </div>


                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="heading">Position</div>
                        </div>

                        <div style={{ position: 'relative', color: 'var(--Gray-Gray02, #999)' }} className="register-input-block-item-inputframe">
                            <img src="./src/assets/search.svg" alt=""></img>
                            Select a position that you want
                        </div>
                    </div>

                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="heading">Describe yourself</div>
                        </div>
                        <Describe description={description} />
                    </div>
                    <DragnDrop setAvatar={setAvatar} />
                </div>
                <div className="register-action">
                    <button onClick={() => { setPage(3) }} style={{ background: '#627D98', color: 'var(--White, #FFF)' }} className="register-action-button">Next</button>
                    <button onClick={() => { setPage(1) }} style={{ background: '#FFF', border: '1px solid #DCDCDC' }} className="register-action-button">Back</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterBlockProfile