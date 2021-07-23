import React, { useState, useEffect } from 'react'
import CityDropdown from './CityDropdown'
import WeatherInfo from './WeatherInfo'
import cityService from '../../services/weather/cities'
import weatherService from '../../services/weather/weather'
import Loader from "react-loader-spinner";

const Weather = () => {
  // State for the list of cities
  const [ cities, setCities ] = useState()
  // State for the current dropdown value
  const [ city, setCity ] = useState({ capital: 'Tallinn', coordinates: [59, 26] })
  // State for the weather data fetched from backend
  const [ weather, setWeather ] = useState()

  // Getting a list of european capitals and their coordinates
  // This will run once when the page is loaded
  useEffect( () => {
    cityService
      .getAll()
      .then(receivedCities => {
        // Sort the cities alphabetically before setting as state
        setCities(
          receivedCities.sort((a, b) => a.capital.localeCompare(b.capital))
        )
      })
  }, [])

  // Getting an object with info of weather conditions in the selected city.
  // This will run and get new conditions every time the state for the currently selected city updates.
  useEffect(() => {
    weatherService
      .getAll(city.coordinates[0], city.coordinates[1])
      .then(receivedWeather => {
        setWeather(receivedWeather)
      })
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
    <div className="weather">
      {!cities || !weather ?
        <Loader
          className="weatherLoader"
          type="TailSpin"
        />
        : <div className="weatherTableContainer">
        
          <div className="dropdownContainer">
            <CityDropdown
              cities={cities}
              city={city}
              setCity={setCity}
              handleDropdown={handleDropdown}
            />
          </div>

          <WeatherInfo
            weather={weather}
          />
        </div>
      }
    </div>
  )
}

export default Weather