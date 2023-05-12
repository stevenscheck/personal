import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import About from '../features/home/About';
import Home from '../features/home/Home';
import Welcome from '../features/home/Welcome';
import EZStack from '../features/projects/EZStack';
import Pet from '../features/projects/Pet';
import Projects from '../features/projects/Projects';
import Weather from '../features/projects/Weather';


/**
 * COMPONENT
 */

const AppRoutes = () => {


  return (
    <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path='/' element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/weather' element={<Weather />} />
          <Route path='/projects/ezstack' element={<EZStack />} />
          <Route path='/projects/pets' element={<Pet />} />
          <Route path='/about' element={<About />} />
        </Routes>
     
    </div>
  );
};

export default AppRoutes;
