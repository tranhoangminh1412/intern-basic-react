import Users from "./Users";
import React, { useState } from "react";
import { ReactDOM } from "react";
import Describe from "./Describe";
import DragnDrop from "./DragnDrop";
import RegisterProgress from "./RegisterProgress";

function RegisterBlockProfile(props) {
    const { fullname, birthday, city, position, description, avatar, activePage, setLogin, setPage } = props
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
                            <div className="heading">Fullname</div>
                        </div>
                        <input ref={fullname} className="register-input-block-item-inputframe"></input>
                    </div>

                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="require">Must</div>
                            <div className="heading">Birthday</div>
                        </div>

                        <div style={{ width: 'max-content' }} className="register-input-block-item-inputframe">
                            <input ref={birthday} style={{ width: '70px', border: 'none' }} placeholder="0000/00/00">
                            </input>
                            <img style={{}} src="./src/assets/calendar.svg" alt=""></img>
                        </div>
                    </div>


                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="heading">City</div>
                        </div>

                        <div style={{ position: 'relative' }} className="register-input-block-item-inputframe">
                            Hà Nội
                            <img style={{ position: 'absolute', right: '5px' }} src="./src/assets/CaretDown.svg" alt=""></img>
                        </div>
                    </div>


                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="heading">Position</div>
                        </div>

                        <div style={{ position: 'relative', color: 'var(--Gray-Gray02, #999)' }} className="register-input-block-item-inputframe">
                            <img style={{}} src="./src/assets/search.svg" alt=""></img>
                            Select a position that you want
                        </div>
                    </div>


                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                            <div className="heading">Describe yourself</div>
                        </div>
                        <Describe description={description} />
                    </div>

                    <DragnDrop avatar = {avatar} />
                </div>
                <div className="register-action">
                    <button onClick={() => {setPage(3)}} style={{ background: '#627D98', color: 'var(--White, #FFF)' }} className="register-action-button">Next</button>
                    <button onClick={() => {setPage(1)}} style={{ background: '#FFF', border: '1px solid #DCDCDC' }} className="register-action-button">Back</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterBlockProfile