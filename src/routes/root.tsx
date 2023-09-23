import React from 'react';
import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar/Navbar';
import './Root.css';

export default function root(): React.ReactElement {
  return (
    <>
      <div id="navbar">
        <Navbar/>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}