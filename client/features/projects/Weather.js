import React from "react";
import weatherapp22 from '../../../public/weatherapp22.jpeg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const navigate = useNavigate()

  const backArrowClick = () => {
    navigate('/projects')
  }
  return (
    <>
      <main className="stackMain">
      <div className="backArrow" onClick={backArrowClick}>
        <ArrowBackIcon></ArrowBackIcon>
        <p>All Projects</p>
        </div>
        <div className="stackTop">
          <h1>Weather App</h1>
          <div className="stackTopIcons">
            <a href="https://github.com/stevenscheck/weatherapp" target="_blank"><GitHubIcon sx={{ fontSize: 40, color: 'black' }}></GitHubIcon></a>
            <a href="https://weather-stevenscheck.vercel.app/" target="_blank"><LanguageIcon sx={{ fontSize: 40, color: 'white' }}></LanguageIcon></a>
          </div>
        </div>
        <div className="stackDiv">
          <section className="project-container">
            <div class="mac-window-bar">
              <button class="close-btn"></button>
              <button class="minimize-btn"></button>
              <button class="fullscreen-btn"></button>
            </div>
            <img className="ezStackImg" src={weatherapp22} />
          </section>
          <section>
            <p className="prjcInfo">
              I developed a weather application using React, Material-UI, and Express for an engaging user experience. The app allows users to input a city and receive current weather information, including temperature, cloud conditions, and hourly forecasts. It utilizes the OpenWeatherMap API and Google Places Autocomplete API for accurate data retrieval. The visually appealing interface, featuring dynamic background images, highlights my expertise in front-end development and user-centric design.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Weather
