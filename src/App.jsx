import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APIKEY}&q=${location}&aqi=no`

  const searchLocation = (event) => {
    if (event.key === 'Enter' && location !== '') {
      fetch(url)
        .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const Click = (event) => {
    fetch(url)
      .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const switchWeather = () => {
    if (data.location) {
    switch (data.current.condition.code) {
      case 1000:
        return "sun";
      case 1006:
      case 1003:
        return "cloud";
      case 1009:
      case 1030:
      case 1135:
      case 1147:
        return "fog";
      case 1063:
      case 1150:
      case 1153:
      case 1168:
      case 1171:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
      case 1198:
      case 1201:
      case 1240:
      case 1243:
      case 1246:
      case 1273:
      case 1276:
      case 1087:
        return "rain";
      case 1066:
      case 1114:
      case 1117:
      case 1069:
      case 1204:
      case 1207:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
      case 1249:
      case 1252:
      case 1255:
      case 1258:
      case 1279:
      case 1282:
      case 1072:
      case 1237:
      case 1261:
      case 1264:
        return "snow";
      default:
        return "";
    }
  }}

  return (
    <div className={switchWeather()}>

      <div className="search">
        <input 
        type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location' />
        <button         
        onClick={Click}
        >Search</button>
      </div>
      <div className="container">
        <div className="primary"> 
          <div className="left">
            <div className="location">
              {data.location ? <h1><b>{data.location.name}, {data.location.country}</b></h1> : <h1>Waiting for a location</h1>}
            </div>
            <div className="clouds">
              {data.location ? <h1>{data.current.condition.text}</h1> : null}
            </div>             
          </div>
          <div className="temperature">
            {data.location ? <h1>{data.current.temp_c} °C</h1> : null}
          </div>

        </div>

        <div className="secondary">
          <div className="secbox">
            <div className="wind">
              {data.location ? <h1><b>Wind</b><br />{data.current.wind_kph} kmh, {data.current.wind_dir} </h1> : <b><h1>Wind</h1></b>  }
            </div> 
            <div className="humidity">
              {data.location ? <h1><b>Humidity</b><br /> {data.current.humidity}%</h1> : <b><h1>Humidity</h1></b> }
            </div>
            <div className="feelslike">
              {data.location ? <h1><b>Feels like</b><br /> {data.current.feelslike_c} °C</h1> : <b><h1>Feels like</h1></b> }
            </div>            
          </div>
          

        </div>
      </div>
      <div className="w-full text-center absolute bottom-2">
        <p><b>Weather App by Ignazio Marrone. Developed using ReactJS && WeatherAPI.com's API.</b></p>
      </div>
    </div>
  )
}

export default App;
