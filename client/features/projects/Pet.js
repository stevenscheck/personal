import React from "react";
import ezstackweb from "../../../public/ezstackweb.jpeg"
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import petsweb from "../../../public/petsweb.jpeg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
const Pet = () => {
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
          <h1>Pet Store</h1>
          <div className="stackTopIcons">
            <a href="https://github.com/Team-G-Graceshopper/Grace-Shopper" target="_blank"><GitHubIcon sx={{ fontSize: 40, color: 'black' }}></GitHubIcon></a>
            {/* <a href="https://weather-stevenscheck.vercel.app/" target="_blank"><YouTubeIcon sx={{ fontSize: 40, color: 'red' }}></YouTubeIcon></a> */}
          </div>
        </div>
        <div className="stackDiv">
          <section className="project-container">
            <div class="mac-window-bar">
              <button class="close-btn"></button>
              <button class="minimize-btn"></button>
              <button class="fullscreen-btn"></button>
            </div>
            <img className="ezStackImg" src={petsweb} />
          </section>
          <section>
            <p className="prjcInfo">
            World of Pets is an e-commerce website for purchasing dogs, cats, and related accessories, using React, Material-UI, Express, and Sequelize for an optimized user experience. The site features an intuitive interface for customers to shop, while an admin login allows management of orders and inventory. This pet-focused e-commerce platform showcases my full-stack expertise and dedication to creating innovative, user-friendly solutions for diverse industries and customer needs.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Pet
