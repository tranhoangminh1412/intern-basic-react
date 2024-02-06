

function ErrorMessage(props) {
    const { setUsrFlag, usrFlag, passwordFlag, setPasswordFlag, nameFlag, birthdayFlag, birthday} = props

    if (usrFlag) {
        return (
            <p className="input-error-message">
                Username already taken
            </p>)
    }
    else if (passwordFlag) {
        return (
            <p className="input-error-message">
                Passwords don't match
            </p>
        )
    }
    else if (nameFlag) {
        return (
            <p className="input-error-message">
                Name contains non-letters
            </p>
        )
    }
    else {
        return null;
    }
}

export default ErrorMessage