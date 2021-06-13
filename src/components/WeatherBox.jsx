import React,{useState,useEffect} from 'react';
import '../weather.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InfoBox from './InfoBox'
import axios from 'axios';

function WeatherBox() {

  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [weather, setWeather] = useState('')

  useEffect(() => {
    async function weatherinfo(){
      const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f779aecdcb84e4a72e87c7f096bbb4a4`)
      console.log(res.data);
      setData(res.data);
      setWeather(res.data.weather[0].description);
    }
    weatherinfo();
  },[search]);


  return (
    <>
      <h1>Weather App</h1>

      <header>
        <TextField className="input" id="standard-basic" label="Enter City Name" value={city} onChange={(e)=>setCity(e.target.value)}/>
        <IconButton className="src-btn" onClick={()=>setSearch(city)}>
          <SearchIcon />
        </IconButton>
        
        <InfoBox data={data} weather={weather}/>
      </header>

    </>
  )
}

export default WeatherBox;
