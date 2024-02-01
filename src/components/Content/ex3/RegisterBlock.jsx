import Users from "./Users";
import React, { useState } from "react";
import { ReactDOM } from "react";
import Describe from "./Describe";
import DragnDrop from "./DragnDrop";

function RegisterBlock(props) {
    const {setLogin} = props
    setLogin(false)
    let spanRef = React.createRef()

    return(
        <div className="content-wrapper">
            <div className="login-register-block"></div>
            <div className="register-block">
                <h1 className="login-header">Register</h1>
                <div style={{display: 'flex'}}>
                    <div className="register-progress-block">
                        <div className="register-progress-block-icon">1</div>
                        <div className="register-progress-block-heading">Account</div>
                    </div>
                    <div className="register-progress-block">
                        <div className="register-progress-block-icon">2</div>
                        <div className="register-progress-block-heading">Profile</div>
                    </div>
                    <div className="register-progress-block">
                        <div className="register-progress-block-icon">3</div>
                        <div className="register-progress-block-heading">Finished</div>
                    </div>
                </div>
                <div className="register-input-block">
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                        <div className="require">Must</div>
                        <div className="heading">Fullname</div>
                        </div>
                    </div>
                    <input className="register-input-block-item-inputframe"></input>
                </div>
                <div className="register-input-block">
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                        <div className="require">Must</div>
                        <div className="heading">Birthday</div>
                        </div>
                    </div>
                    <div style={{width: 'max-content'}} className="register-input-block-item-inputframe">
                        <input style={{width: '70px', border: 'none'}}  placeholder="0000/00/00">
                        </input>
                        <img style={{}} src="./src/assets/calendar.svg" alt=""></img>
                    </div>
                </div>
                <div className="register-input-block">
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                        <div className="heading">City</div>
                        </div>
                    </div>
                    <div style={{position: 'relative'}} className="register-input-block-item-inputframe">
                        Hà Nội
                        <img style={{position: 'absolute', right: '5px'}} src="./src/assets/CaretDown.svg" alt=""></img>
                    </div>
                </div>
                <div className="register-input-block">
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                        <div className="heading">Position</div>
                        </div>
                    </div>
                    <div style={{position: 'relative',color: 'var(--Gray-Gray02, #999)'}} className="register-input-block-item-inputframe">
                        <img style={{}} src="./src/assets/search.svg" alt=""></img>
                        Select a position that you want
                    </div>
                </div>
                <div className="register-input-block">
                    <div className="register-input-block-item">
                        <div className="register-input-block-item-textbox">
                        <div className="heading">Describe yourself</div>
                        </div>
                    </div>
                    <Describe />
                </div>
                <DragnDrop />
            </div>
        </div>
    )
}

export default RegisterBlock