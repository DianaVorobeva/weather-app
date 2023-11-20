import { useEffect, useState } from 'react';
import feelsLikeBlack from '../assets/feelsLikeBlack.png';
import pressureBlack from '../assets/pressureBlack.png';
import sunriseBlack from '../assets/sunriseBlack.png';
import sunsetBlack from '../assets/sunsetBlack.png';
import visibilityBlack from '../assets/visibilityBlack.png';



const OtherInfo = ({data}) => {

    return (
        <div className="otherInfo">
            <div className="item">
                <img src={feelsLikeBlack} alt="FeelsLike"/>
                <p className="description">Feels like </p>
                <p className="feelsLike">{data ? `${Math.round(data.main.feels_like)}°C` : "8°C"}</p>
            </div>
            <div className="item">
                <img src={pressureBlack} alt="Pressure"/>
                <p className="description">Pressure</p>
                <p className="pressure">{data ? `${data.main.pressure}hPa` : "1010 hPa"}</p>
            </div>
            <div className="item">
                <img src={visibilityBlack} alt="Visibility"/>
                <p className="description">Visibility</p>
                <p><span className="visibility">{data ? (Number(`${data.visibility}`)/1000) : "10"}</span> km</p>
            </div>
            <div className="item">
                <img src={sunriseBlack} alt="Sunrise"/>
                <p className="description">Sunrise</p>
                <p className="sunrise">{data 
                ? 
                `${(new Date((data.sys.sunrise + data.timezone)*1000).getUTCHours()+ ":" +new Date((data.sys.sunrise + data.timezone)*1000).getMinutes())}`
                : "6:46"}</p>
            </div>
            <div className="item">
                <img src={sunsetBlack} alt="Sunset"/>
                <p className="description">Sunset</p>
                <p className="sunset">{data 
                ? 
                `${(new Date((data.sys.sunset + data.timezone)*1000).getUTCHours()+ ":" +new Date((data.sys.sunset + data.timezone)*1000).getMinutes())}`
                : "17:50"}</p>
            </div>
        </div>
    )
}

export default OtherInfo;