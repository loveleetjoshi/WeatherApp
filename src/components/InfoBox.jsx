import React from 'react';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import '../weather.css';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import OpacityIcon from '@material-ui/icons/Opacity';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';

function Citybox({ data, weather }) {
    let icon = null;

    switch (weather) {
        case 'haze':
            icon = <CloudIcon />;
            break;
        case 'clear sky':
            icon = <WbSunnyIcon />;
            break;
        case 'moderate rain':
            icon = <BeachAccessIcon />;
            break;
        case 'light rain':
            icon = <OpacityIcon />;
            break;
            case 'overcast clouds':
                icon = <CloudQueueIcon />;
                break;
        default:
            break;
    }

    return (
        <>
            {
                data === null ? <p>No data Found<br></br> Type proper city name</p> :
                    <div className="infobox">
                        <PersonPinIcon className="icon" />
                        <h2>{data.name}</h2>
                        <p>{weather}{icon}</p>

                        <h3>{data.main.temp}&#176;Cel</h3>
                        <p>Min: {data.main.temp_max}&#176;Cel | Max: {data.main.temp_min}&#176;Cel</p>
                    </div>
            }
        </>
    )
}

export default Citybox
