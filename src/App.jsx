
import { useEffect, useEffectEvent, useRef, useState } from 'react'
import './index.css'
import WeatherCard from './WeatherCard'
import axios from 'axios'
function App() {

  const[location, setLocation] =useState("")
  const[data, setData] = useState(null)

  const cityInput = useRef()

  const getWeather = async()=>{
     try {
      const API =`https://api.openweathermap.org/data/2.5/weather?q=${location}&44.34&lon=10.99&appid=eef5cf7bffea5f5d18106162720cfae7&units=metric`

     if(!location) return
     
      const res = await axios.get(API)
      setData(res.data)

      
     } catch (error) {
      console.log("axios error", error)
      
     }
  }

  useEffect(()=>{
    getWeather()
  },[location])
  
  const getInputValue = ()=>{
    setLocation(cityInput.current.value)
  }


  

  return (
    <>
       <h1 className='text-white font-bold text-lg'>weather app</h1>

    <div className='mb-1 flex gap-1'>
      <input  ref={cityInput} placeholder='Enter city....' type='text' className='border p-1 bg-white text-center outline-0'>
      </input>

      <button onClick={getInputValue} className='bg-white px-2 py-1  hover:bg-black hover:text-white cursor-pointer'>Get
      </button>

      </div>
   <WeatherCard data ={data}/>
   </>
  )
}

export default App
