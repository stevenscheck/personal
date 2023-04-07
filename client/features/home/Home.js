import React, { useEffect, useState } from 'react';
import TypingEffect from './TypingEffect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
    navigate('/projects')
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


  return (
    <>
      <main className='homePage'>
        <section className='homeText'>
          <TypingEffect text={'Welcome I am Steven Scheck'} delay={75} onTypingFinished={handleTypingFinished} />
          {showSecondText && <TypingEffect text={'I am a Fullstack React Developer with a passion for what I do'} delay={25} smallText={true} />}
        </section>
        <section className='nextArrow' onMouseEnter={handleNextArrowMouseEnter} onMouseLeave={handleNextArrowMouseLeave} onClick={handleNextArrowClick}>
          <ArrowForwardIosIcon className={wiggle ? 'nextIcon wiggle' : 'nextIcon'} sx={{ fontSize: 40 }} />
          <p className='nextText'>More about me</p>
        </section>
      </main>
    </>
  );

};

export default Home;
