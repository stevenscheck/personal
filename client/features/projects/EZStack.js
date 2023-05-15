import React from "react";
import ezstackweb from "../../../public/ezstackweb.jpeg"
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const EZStack = () => {
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
          <h1>EZ Stack</h1>
          <div className="stackTopIcons">
            <a href="https://github.com/Team-F-capstone/Capstone" target="_blank"><GitHubIcon sx={{ fontSize: 40, color: 'black' }}></GitHubIcon></a>
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
            <img className="ezStackImg" src={ezstackweb} />
          </section>
          <section>
            <p className="prjcInfo">
            EZ Stack is a freelance marketplace app inspired by Fiverr, using React, Material-UI, Express, and Sequelize for a seamless experience. The platform streamlines project posting, application submission, and communication for both freelancers and clients. A built-in messenger ensures smooth collaboration, while the intuitive interface supports project matching. EZ Stack showcases my full-stack expertise and commitment to developing innovative solutions addressing real-world problems.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}

export default EZStack
