import windBlack  from '../assets/windBlack.png';
import dropBlack  from '../assets/drop-black.png';
import compassBlack from '../assets/compassBlack.png';
import { useEffect, useState } from 'react';

const MainPart = ({data}) => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [windDirection, setWindDirection] = useState();

    useEffect(()=>{
        const getOurDate = () => {
        const myDate = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
        let todayDate = myDate.getDate();
        let month = months[myDate.getMonth()];
        let year = myDate.getFullYear();
        let hours = myDate.getHours();
        let minutes = myDate.getMinutes();

        setDate(`${todayDate}` + " " + `${month}` + " " + `${year}`);
        setTime(`${hours} : ${minutes}`);
        };
        getOurDate();

    },[]);

    useEffect(()=>{
    const compassSector = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    if(data) {
        setWindDirection(compassSector[(data.wind.deg / 22.5).toFixed(0)]);
    }
    },[data])

    return (
        <div className="mainPart">
        <h4 className="minMax">
            <span className="minTemp">{data ? `${Math.round(data.main.temp_min)}°C` : "4°C"}</span>
            / 
            <span className="maxTemp">{data ? `${Math.round(data.main.temp_max)}°C` : "7°C"}</span>
        </h4>
        <h1 className='temperature'>{data ? `${Math.round(data.main.temp)}°C` : "8°C"}</h1>
        <p className="conditionals">{data ? `${data.weather[0].main}` : "Clear"}</p>
        <div className="block1">
            <div className="box">
                <p className="box">
                  <img src={compassBlack} alt="compass"/>
                  <span className="windDirection"> 
                   {data ? windDirection : "SSE"}
                  </span>
                </p>
            </div>
            <div className="box">
                <p className="box">
                  <img src={windBlack} alt="windSpeed"/>
                  <span  className="windSpeed">
                     {data ? Math.round(data.wind.speed) :"6"}
                  </span> 
                  m/s
                </p>
            </div>
            <div className="box">
                <p  className="box">
                  <img src={dropBlack} alt="Humidity"/>
                  <span className="humidity">
                  {data ? data.main.humidity : "63"}
                  </span>
                  %
                </p>
            </div>
        </div>
        <div className="time">
            <p>{date}</p>
            <h4>{time}</h4>
        </div>
    </div>
    )
}

export default MainPart;