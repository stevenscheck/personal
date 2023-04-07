import React, { useState } from "react";
import { Link } from "react-router-dom";
import ezstackweb from "../../../public/ezstackweb.jpeg"
import petsweb from "../../../public/petsweb.jpeg"
import weatherweb from "../../../public/weatherweb.png"


const Projects = () => {
  const [hovering, setHovering] = useState(false)

  const overlayHoverEnter = () => {
    setHovering(true)
  }

  const overlayHoverLeave = () => {
    setHovering(false)
  }

  return(
    <>
    <main className="projectMain">
      <section className="projectsSection">
        <ul className="projectsUl">
          <li>
              <h2>EZ Stack</h2>
              <div className="imgContainer" onMouseEnter={overlayHoverEnter} onMouseLeave={overlayHoverLeave}>
                <img src={ezstackweb} />
                <div className="overlay"></div>
                <Link to={'/projects/ezstack'}><button className={`welcomeButton`}>Learn More</button></Link>
              </div>
          </li>
          <li>
              <h2>Pet Store</h2>
              <div className="imgContainer" onMouseEnter={overlayHoverEnter} onMouseLeave={overlayHoverLeave}>
                <img  src={petsweb} />
                <div className="overlay"></div>
                <Link to={'/projects/pets'}><button className={`welcomeButton`}>Learn More</button></Link>
              </div>
          </li>
          <li>
              <h2>Weather App</h2>
              <div className="imgContainer" onMouseEnter={overlayHoverEnter} onMouseLeave={overlayHoverLeave}>
                <img src={weatherweb} />
                <div className="overlay"></div>
                <Link to={'/projects/weather'}><button className={`welcomeButton`}>Learn More</button></Link>
              </div>
          </li>
        </ul>
      </section>
    </main>
    </>
  )
}

export default Projects
