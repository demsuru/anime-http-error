import React from 'react';
import './Header.css'; 
// import logo from './logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <h1 className="web-name">HTTP Errors Anime</h1>
      </div>
    </header>
  );
}

export {Header};
