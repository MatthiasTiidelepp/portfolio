import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CityDropdown from './CityDropdown'
import WeatherInfo from './WeatherInfo'
import cityService from '../../services/weather/cities'
import weatherService from '../../services/weather/weather'

function Weather() {
  // States for the the list of cities, current dropdown value, and the fetched weather data.
  const [ cities, setCities ] = useState()
  const [ city, setCity ] = useState({ capital: 'Tallinn', coordinates: [59, 26] })
  const [ weather, setWeather ] = useState()

  // An array of weekdays and the current date to generate weekday names for the forecast
  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const day = new Date().getDay()

  useEffect(() => {
    cityService
      .getAll()
      .then(receivedCities => {
        setCities(receivedCities)
      })
  }, [])

  // Getting an object with info of weather conditions in the selected city.
  // This will run and get new conditions every time the state for the currently selected city updates.
  useEffect(() => {
    weatherService
      .getAll(city.coordinates[0], city.coordinates[1])
      .then(receivedWeather => {
        console.log('passed in from weather main', receivedWeather)
        setWeather(receivedWeather)
      })

    // const fetchData = async () => {
    //   const API_KEY = await process.env.REACT_APP_API_KEY
    //   const result = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coordinates[0]}&lon=${city.coordinates[1]}&units=metric&exclude=minutely,hourly,alerts&appid=dbbed851ca778f15c2d8d6feaf9641f5`)
    //   setWeather(result.data)
    // }

    // fetchData()
  }, [ city ])

  // Event handler for setting the current city to the one chosen from dropdown
  const handleDropdown = (event)  => {
    setCity(
      {
        'capital': event.target.value,
        'coordinates': cities.find(c => c.capital === event.target.value).coordinates
      }
    )
  }

  return (
    <div className="weatherContainer">

      {!cities ?
        null
        : <div className="dropdownContainer">
          <CityDropdown
            cities={cities}
            city={city}
            setCity={setCity}
            handleDropdown={handleDropdown}
          />
        </div>
      }

      {!weather ?
        null
        : <WeatherInfo
          weather={weather}
          week={week}
          day={day}
        />
      }
    </div>
  )
}

export default Weather