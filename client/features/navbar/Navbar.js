import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div>
      <h1>FS-App-Template</h1>
      <nav>

          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>

          </div>
          
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
