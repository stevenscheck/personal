import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from '../features/home/Home';
import Welcome from '../features/home/Welcome';


/**
 * COMPONENT
 */

const AppRoutes = () => {


  return (
    <div>
        <Routes>
          <Route path="/*" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
     
    </div>
  );
};

export default AppRoutes;
