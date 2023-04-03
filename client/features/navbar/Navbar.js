import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

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
    </div>
  );
};

export default Navbar;
