import React, { useEffect, useState } from 'react';
import me2 from '../../../public/me2.png'

const About = () => {

  return(
    <>
    <main className='aboutMain'>
      <img className='me' src={me2}/>
      <p>I am a web developer based in Ventura, California. I graduated Fullstack Academy which has given me the ability to create logical and smooth websites using technologies like Express, React, Node.Js, HTML and CSS. 

      Software development is a passion I wasn't aware I had but now that I have discovered and gone through the necessary courses I am very excited for a long, successful career in this industry.</p>
    </main>
    </>
  )
}

export default About
