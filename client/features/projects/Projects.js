import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ezstackweb from "../../../public/ezstackweb.jpeg"
import petsweb from "../../../public/petsweb.jpeg"
import weatherweb from "../../../public/weatherweb.png"
import weatherapp22 from '../../../public/weatherapp22.jpeg'
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Projects = () => {
  const [hovering, setHovering] = useState(false)
  const [showSecondText, setShowSecondText] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const [pause, setPause] = useState(false)

  const navigate = useNavigate()

  const handleTypingFinished = () => {
    setShowSecondText(true);
  }

  useEffect(() => {
    if(!pause){
    const intervalId = setInterval(() => {
      setWiggle(true);
      setTimeout(() => {
        setWiggle(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(intervalId);
  }
  }, [pause]);

  const handleNextArrowClick = () => {
    navigate('/about')
  }
  
  const handleNextArrowMouseEnter = () => {
    setPause(true)
    setWiggle(true);
    setTimeout(() => {
      setWiggle(false);
    }, 1000);
  };

  const handleNextArrowMouseLeave = () => {
    setWiggle(false);
    setPause(false)
  };


  const overlayHoverEnter = () => {
    setHovering(true)
  }

  const overlayHoverLeave = () => {
    setHovering(false)
  }

  return (
    <>
      <main className="projectMain">
        <section className="projectsSection">
          <h1 className="projectsTitle">Projects</h1>
          <ul className="projectsUl">
            <li>
              <h2>EZ Stack</h2>
              <div className="imgContainer" onMouseEnter={overlayHoverEnter} onMouseLeave={overlayHoverLeave}>
                <div>
                  <div class="mac-window-bar">
                    <button class="close-btn"></button>
                    <button class="minimize-btn"></button>
                    <button class="fullscreen-btn"></button>
                  </div>
                  <img src={ezstackweb} />
                </div>
                <div className="overlay"></div>
                <Link to={'/projects/ezstack'}><button className={`welcomeButton`} id="buttonest" >Learn More</button></Link>
              </div>
            </li>
            <li>
              <h2>Pet Store</h2>
              <div className="imgContainer" onMouseEnter={overlayHoverEnter} onMouseLeave={overlayHoverLeave}>
              <div>
                  <div class="mac-window-bar">
                    <button class="close-btn"></button>
                    <button class="minimize-btn"></button>
                    <button class="fullscreen-btn"></button>
                  </div>
                  <img src={petsweb} />
                </div>
                <div className="overlay"></div>
                <Link to={'/projects/pets'}><button className={`welcomeButton`} id="buttonest">Learn More</button></Link>
              </div>
            </li>
            <li>
              <h2>Weather App</h2>
              <div className="imgContainer" onMouseEnter={overlayHoverEnter} onMouseLeave={overlayHoverLeave}>
              <div>
                  <div class="mac-window-bar">
                    <button class="close-btn"></button>
                    <button class="minimize-btn"></button>
                    <button class="fullscreen-btn"></button>
                  </div>
                  <img src={weatherapp22} />
                </div>
                <div className="overlay"></div>
                <Link to={'/projects/weather'}><button className={`welcomeButton`} id="buttonest">Learn More</button></Link>
              </div>
            </li>
          </ul>
        </section>
        <section className='nextArrow' onMouseEnter={handleNextArrowMouseEnter} onMouseLeave={handleNextArrowMouseLeave} onClick={handleNextArrowClick}>
          <ArrowForwardIosIcon className={wiggle ? 'nextIcon wiggle' : 'nextIcon'} sx={{ fontSize: 40 }} />
          <p className='nextText'>About Me</p>
        </section>
      </main>
    </>
  )
}

export default Projects
