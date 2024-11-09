// Navbar.jsx
import React from 'react';
import { LiaAccusoft } from 'react-icons/lia';
import { GiM3GreaseGun } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Arena from './Arena';
import PathF from './PathF';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-black'>
      <div className='bg-black flex pt-14  '>
        <GiM3GreaseGun className='navbar-item' style={{ opacity: 0 }} size={70} color='white'/>
        <LiaAccusoft className='navbar-item' style={{ opacity: 0 }} size={70} color='white'/>
      </div>
      <div>
        <ul className='list-none text-white flex gap-10 p-7'>
          <li className='navbar-item' style={{ opacity: 0 }}>Home</li>
          <li className='navbar-item' style={{ opacity: 0 }}>About Chanakya</li>
          <li className='navbar-item' style={{ opacity: 0 }}>Training</li>
          <li>
            <Link to="/pathf" element={<PathF/>} className='navbar-item' style={{ opacity: 0 }}>
              BattleField
            </Link>
          </li>
          <li className='navbar-item' style={{ opacity: 0 }}>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
