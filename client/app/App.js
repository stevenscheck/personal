import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Welcome from '../features/home/Welcome';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {

  const location = useLocation();

  



  return (
    <div>
      {location.pathname !== '/' ? 
      <Navbar />
      : null} 
      <AppRoutes />
    </div>
  );
};

export default App;
