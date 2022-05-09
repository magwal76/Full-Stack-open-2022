import React from "react";
const Weather = ({ weatherdata }) => {
    return (
        <div>
            {!weatherdata ? (
                <p>...</p>
            ) : (
            <>
            <div>Temperature: {weatherdata.main.temp} Celcius</div>
                {!weatherdata ? null : weatherdata.length >0 ? (
                    <p>...</p>
                ) : (
                    <div> 
                        <img style={{ margin: "15px 0" }}
                        width="50px"
                        src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`} alt="" />
                    </div>)
                }
            <div>
                Wind: {weatherdata.wind.speed} m/s
            </div>
            </>
            )}
        </div>
    );
};

export default Weather;