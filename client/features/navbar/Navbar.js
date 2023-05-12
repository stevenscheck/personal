import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {

  const [show, setShow] = useState(false)
  const [navClick, setNavClick] = useState(false)

  const navMouseLeave = () => {
    setShow(false)
  }

  const navMouseEnter = () => {
    setShow(true)
  }

  const navClickFunc = () => {
    setNavClick(!navClick)
  }


  return (
    <div>
      <nav className='nav' >
          <section>
            <h1 className='navName'>Steven Scheck</h1>
          </section>
          <section className='navOptions'>
            <div style={show ? {visibility: 'visible'} : null} className='navMenuContainer'>
            <MenuIcon className='navfF' sx={{visibility: 'visible'}} onMouseEnter={navMouseEnter} onMouseLeave={navMouseLeave} onClick={navClickFunc}></MenuIcon>
            </div>
            <div style={navClick ? {visibility: 'visible'} : null} className='navLinks'>
            <Link onClick={navClickFunc} className='link' to="/home">Home</Link>
            <Link onClick={navClickFunc} className='link' to="/projects">Projects</Link>
            <Link onClick={navClickFunc} className='link' to="/about">About</Link>
            </div>
          </section>     
      </nav>
      <nav>
          <div className='socials'>
            <ul>
              <a href='https://www.linkedin.com/in/steven-scheck/' target="_blank"><li className='linkedin social-icon'>
                <span style={{color: 'white'}}>LinkedIn</span>
                <LinkedInIcon className='linkedinIcon' sx={{ fontSize: 40 }} />
              </li>
              </a>
              <a href='https://github.com/stevenscheck' target="_blank"><li className='github social-icon'>
                <span style={{color: 'black'}}>GitHub</span>
                <GitHubIcon sx={{ fontSize: 40 }} />
              </li>
              </a>
              <a href='https://www.dropbox.com/s/y9axlkyqaa7s6ln/Steven%20Scheck_Resume.docx%20%281%29.pdf?dl=0' target="_blank">
              <li className='resume social-icon'>
                <span style={{color: 'black'}}>Resume</span>
                <ArticleIcon sx={{ fontSize: 40, color: 'black' }} />
              </li>
              </a>
            </ul>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;
