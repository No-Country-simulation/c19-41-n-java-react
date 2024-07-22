import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="container-fluid">
      
      <Navbar/>

      <main>
        <Outlet />    
      </main>
      <div className="container">
      <Footer/>
      </div>
      
    </div>



 );
}

export default Layout;