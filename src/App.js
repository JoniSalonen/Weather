import { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/weather';

function App() {
  const [latidute, setLatidute] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLatidute(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setIsLoading(false)
      },(error) => {
        console.log(error)
        alert("Paikannus epäonnistui")
      })
    } else {
      alert("Selaimesi ei tue paikannusta!")
    } 
  }, [])
  
  if(isLoading) {
    return <p>Ladataan sijaitia...</p>
  }
  else{
  return (
   <div className="content">
    <h3> Sijaintisi</h3>
    <p>Sijaintisi:&nbsp; {latidute.toFixed(3)}, {longitude.toFixed(3)}</p>
    <Weather lat={latidute} lng={longitude}/>
   </div>
  );
 }
}

export default App;
