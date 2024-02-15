

function RegisterProgress(props) {
    const { activePage} = props

    return (
        <div style={{ height: 'fit-content', display: 'flex' }}>
            <div id="progress-1" className="progress-line"></div>
            <div className="register-progress-block">
                <div style = { activePage>=1 ? {background: '#617D98'} : {}} className="register-progress-block-icon">1</div>
                <div className="register-progress-block-heading">Account</div>
            </div>
            <div id="progress-2" className="register-progress-block">
                <div style = { activePage>=2 ? {background: '#617D98'} : {}} className="register-progress-block-icon">2</div>
                <div className="register-progress-block-heading">Profile</div>
            </div>
            <div id="progress-3" className="register-progress-block">
                <div style = { activePage==3 ? {background: '#617D98'} : {}} className="register-progress-block-icon">3</div>
                <div className="register-progress-block-heading">Finished</div>
            </div>
        </div>
        
    )
}

export default RegisterProgress