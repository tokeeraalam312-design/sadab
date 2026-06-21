import React from 'react'

function WeatherCard({data}) {
  console.log(data)
  return (
    <div className='flex flex-col gap-2 bg-sky-500'>
      
    <div>{data ?<div>
      <p></p>
     <p>Name: {data.name}, {data.sys.country}</p>
     <p>Temp:{data.main.temp}</p>
     <p>Wind: {data.wind.speed}</p>

    </div> : <h1>no city found</h1>}</div>

    </div>
  )
}

export default WeatherCard