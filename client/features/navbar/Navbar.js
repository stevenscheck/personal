import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div>
      <nav className='nav' >
          <section>
            <h1 className='navName'>Steven Scheck</h1>
          </section>
          <section className='navOptions'>
            <Link className='link' to="/home">Home</Link>
            <Link className='link' to="/about">About</Link>
            <Link className='link' to="/contact">Contact Me</Link>
          </section>     
      </nav>
      <nav>
          <div className='socials'>
            <ul>
              <a href='https://www.linkedin.com/in/steven-scheck/'><li className='linkedin social-icon'>
                <span style={{color: 'white'}}>LinkedIn</span>
                <LinkedInIcon className='linkedinIcon' sx={{ fontSize: 40 }} />
              </li>
              </a>
              <a href='https://github.com/stevenscheck'><li className='github social-icon'>
                <span style={{color: 'black'}}>GitHub</span>
                <GitHubIcon sx={{ fontSize: 40 }} />
              </li>
              </a>
              <li className='resume social-icon'>
                <span style={{color: 'black'}}>Resume</span>
                <ArticleIcon sx={{ fontSize: 40 }} />
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;
