import Cities from "./Cities";

function CitiesDropdown(props) {
  const { showCities,setCity,setShowCities } = props;

  if (showCities) {
    return (
      <div className="cities-dropdown" >
        {Cities.map((city, index) => (
              <div
                key={index}
                className="position-option"
                onClick={(e) => {
                  setCity(city);
                  setShowCities(false)
                }}
              >
                {city}
              </div>
            ))}
      </div>
    );
  } else {
    return null;
  }
}

export default CitiesDropdown;
