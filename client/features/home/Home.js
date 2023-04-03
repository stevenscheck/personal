import React, { useState } from 'react';
import TypingEffect from './TypingEffect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

const Home = () => {
  const [showSecondText, setShowSecondText] = useState(false);

  const handleTypingFinished = () => {
    setShowSecondText(true);
  }
  

  return (
    <>
    <main className='homePage'>
      <nav>
      <div className='socials'>
          <ul>
            <li className='linkedin'> <LinkedInIcon className='linkedinIcon' sx={{ fontSize: 40 }} /> </li>
            <li className='github'> <GitHubIcon  sx={{ fontSize: 40 }}/> </li>
            <li className='resume'> <ArticleIcon  sx={{ fontSize: 40 }}/> </li>
          </ul>
        </div>
      </nav>   
        <section className='homeText'>
          <TypingEffect text={'Welcome I am Steven Scheck'} delay={75} onTypingFinished={handleTypingFinished} />
          {showSecondText && <TypingEffect text={'I am a Fullstack React Developer with a passion for what I do'} delay={25} smallText={true} />}
        </section>
        </main>
    </>
  );
  
};

export default Home;
