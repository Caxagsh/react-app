import React, {useState, useEffect} from "react";
import timeZones from "../time-zones";
type Props = {
    cityCountry:string;
}
 

export const Timer:React.FC<Props> = ({cityCountry}) => {
const styles: React.CSSProperties = {backgroundColor:"lightblue",
fontSize: "2em"};

const [time, setTime] = useState<Date>(new Date());
function setTimeZone(timeZoneName:string):number{
    
    return timeZones.findIndex((elm) => elm.name.split("/")[1] === timeZoneName || elm.countryName === timeZoneName);
    
    
}
function tic() {
    setTime(new Date());
    
}
let zone: number;
zone = setTimeZone(cityCountry) === -1 ? 195 : setTimeZone(cityCountry);


useEffect(() => {
    const interval = setInterval(tic, 2000);
    console.log("useEffect");
    return () => clearInterval(interval);
}, [])

    return <div>
        <h2 >Current Time in {cityCountry}</h2>
        <p style={styles}>{time.toLocaleTimeString(undefined, {timeZone:timeZones[zone].name})}</p>
    </div>
}