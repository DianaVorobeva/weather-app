import { useState } from 'react';
import './App.css';
import MainPart from './components/MainPart';
import OtherInfo from './components/OtherInfo';
import axios from 'axios';
import { GoLocation } from "react-icons/go";

function App() {
  const API = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "fa55c9b48bf19b93b69b0f2b81fdf56c"
  }

  const [inputText, setInputText] = useState();
  const [resData,setResData] = useState();

  const whenEnter = (e) => {

    if (e.keyCode === 13) {
      fetchData(inputText);
      setInputText('');
  }};


  const fetchData = async(inputText) => {
    
    try {
      const response = await axios.get(`${API.endpoint}weather?q=${inputText}&units=metric&appID=${API.key}`); 
      setResData(response.data);
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  };


  const getUserLocation = async() => {

    if (navigator.geolocation) {
     
      navigator.geolocation.getCurrentPosition(
        (position) => {
          
          const { latitude, longitude } = position.coords;
          
          try {
            const fetchData = async() => {
            const response = await axios.get(`${API.endpoint}weather?lat=${latitude}&lon=${longitude}&appid=${API.key}`); 
            console.log(response)
            setResData(response.data);
            }
            fetchData()
         
          } catch (err) {
            console.log(err)
          }
        },
       
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }

    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };


  return (
 
      <div>
      <div className="container">
        <div className="header">
            <input 
            type="text" 
            spellCheck="false" 
            placeholder="Enter your city..." 
            className='input'
            value={inputText || ""}
            onChange={(e)=>setInputText(e.target.value)}
            onKeyDown={(e)=> whenEnter(e)}
            />
            <GoLocation 
            style={{fontSize:"28px", marginLeft:"15px"}}
            onClick={getUserLocation}/>
        </div>

        <div className="where">
            <h2 className="city">{resData ? `${resData.name}, ${resData.sys.country}` : "Moscow, RU"}</h2>
        </div>

       <MainPart data={resData}/>
       <OtherInfo  data={resData}/>
      </div>
      </div>

  )
}


export default App;
