import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
    <h1 className="header-title">HTTPAnime</h1>
      <div className="header-right">
        <a href="https://github.com/demsuru/anime-http-error" target="_blank" rel="noopener noreferrer">
          <img src={'https://kxrdwlblondtkduihzme.supabase.co/storage/v1/object/sign/Http%20Anime%20Errors/github-mark-white.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIdHRwIEFuaW1lIEVycm9ycy9naXRodWItbWFyay13aGl0ZS5wbmciLCJpYXQiOjE3MTg4ODc5ODcsImV4cCI6MTc1MDQyMzk4N30.cQi6szH-iskrBP-BYWddqnx7Sgra1ibFNi7DUJLevQ8&t=2024-06-20T12%3A53%3A07.280Z'} alt="GitHub" className="header-icon" />
        </a>
      </div>
    </header>
  );
}

export { Header };
