import Users from "./Users";
import React, { useEffect, useMemo, useState } from "react";
import { ReactDOM } from "react";
import Describe from "./Describe";
import DragnDrop from "./DragnDrop";
import RegisterProgress from "./RegisterProgress";
import ErrorMessage from "./ErrorMessage";
import ReactInfiniteCalendar from "./InfiniteCalendar";
import PositionsDropdown from "./PositionsDropdown";
import Positions from "./Positions";

function RegisterBlockProfile(props) {
    const { fullname, setFullname, birthday, setBirthday, city, setCity, position, setPosition, description,
            setDescription, avatar, setAvatar, activePage, setLogin, setPage } = props
    const [nameFlag, setNameFlag] = useState(true)
    const [showPositions,setShowPositions] = useState(false)
    const [positionFlag,setPositionFlag] = useState(false)
    const [positionPlaceholder,setPositionPlaceholder] = useState(position)
    const [positionSearchValue,setPositionSearchValue] = useState("")
    const [positionSelectValue,setPositionSelectValue] = useState("")

    const setButton = useMemo(
        () => {
            if(fullname == '' || birthday == ''){
                console.log(fullname + ' ' + birthday)
                return true
            }
            else{
                return false
            }
        },
        [fullname,birthday,positionFlag]
    )


    const getName = (event) => {
        setFullname(event.target.value)
        const nonAlphabeticRegex = /^[a-zA-Z\s]*$/;
        setNameFlag(nonAlphabeticRegex.test(event.target.value))
        if (!nameFlag) {
            event.target.style.borderColor = "red"
        }
        else {
            event.target.style.borderColor = "#DCDCDC"
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

    function toggleDisplay(){
        let datepicker = document.querySelector(".datepicker")
        console.log(datepicker.style.display)
        if (datepicker.style.display == 'none') {
            datepicker.style.display = 'unset'
        }
        else{
            datepicker.style.display = 'none'
        }
    }

    // setTimeout(() => {
    //     document.querySelector(".datepicker").style.display == 'none'
    // }, 200);

    function validatePosition() {
        Positions.forEach(p => {
            if (positionSelectValue == p) {
                console.log('p: ' +p)
                console.log('value in input: ' + positionSelectValue)
                setPosition(positionSelectValue)
                setPositionFlag(true)
                console.log("Found position")
            }
        });
    }

    function handleNextClick(){
        
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
                        <input onInput={getName} className="register-input-block-item-inputframe" value={fullname}></input>
                        <ErrorMessage nameFlag={nameFlag} />
                    </div>

                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="require">Must</div>
                            <div className="heading">Birthday</div>
                        </div>
                        <div style={{ width: 'max-content' }} className="register-input-block-item-inputframe">
                            <div style={{ width: '70px', border: 'none' }} placeholder="0000/00/00" >
                                {birthday}
                            </div>
                            <img onClick={() => toggleDisplay()} style={{}} src="./src/assets/calendar.svg" alt=""></img>
                            <ReactInfiniteCalendar setBirthday={setBirthday} />
                        </div>
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
                            <input placeholder={"Select a position that you want"} style={{border: 'none', overflow: 'hidden', width: '27.44em'}} 
                            className="register-input-block-item-inputframe" onFocus={()=>{setShowPositions(true)}} onBlur={()=>{setTimeout(() => {
                                setShowPositions(false)
                            }, 150);}} id="positionInput"
                            value={positionSelectValue} 
                            onInput={(e) => {setPositionSelectValue(e.target.value);setPositionSearchValue(e.target.value);validatePosition}} 
                            />
                        </div>
                        <PositionsDropdown showPositions={showPositions} setPosition={setPosition} setPositionPlaceholder={setPositionPlaceholder} 
                        setPositionSelectValue = {setPositionSelectValue} positionSearchValue={positionSearchValue} />
                    </div>

                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="heading">Describe yourself</div>
                        </div>
                        <Describe description={description} setDescription={setDescription} />
                    </div>
                    <DragnDrop setAvatar={setAvatar} />
                </div>
                <div className="register-action">
                    <button disabled={setButton} onClick={() => { setPage(3); console.log(fullname + ' ' + birthday) }} style={{ background: '#627D98', color: 'var(--White, #FFF)' }} className="register-action-button">Next</button>
                    <button onClick={() => { setPage(1) }} style={{ background: '#FFF', border: '1px solid #DCDCDC' }} className="register-action-button">Back</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterBlockProfile