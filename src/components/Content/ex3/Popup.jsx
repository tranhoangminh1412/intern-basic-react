import { useEffect } from "react";

function Popup(props) {
  const { popUp, setPopUp, popUpPosition, popUpMessage } = props;

  useEffect(() => {
    if (popUp.active) {
      setTimeout(
        () =>
          setPopUp((abc) => ({
            ...abc,
            active: false,
          })),
        4000
      );
    }
  }, [popUp,setPopUp]);
  return (
    <div
      style={{
        display: popUp.active ? "flex" : "none",
        background: popUp.status ? "#28AE60" : "#E74C3D",
        opacity: popUp.active ? "1" : "0",
      }}
      className="popup-container"
    //   onClick={(e) => (e.target.style.opacity = 0)}
    >
      {popUp.popUpMessage ? (
        <p
        //   onClick={(e) => (e.target.parentNode.style.opacity = 0)}
          className="popup-text"
        >
          {popUp.popUpMessage}
        </p>
      ) : (
        <p
        //   onClick={(e) => (e.target.parentNode.style.opacity = 0)}
          className="popup-text"
        >
          Action Successful!
        </p>
      )}
    </div>
  );
}

export default Popup;
