// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О клубе</Link></li>
          <li><Link to="/events">События</Link></li>
          <li><Link to="/forum">Форум</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
      </nav>
      <form className="search-form">
        <input 
          type="text" 
          placeholder="Поиск..." 
          aria-label="Поиск"
        />
        <button type="submit">Поиск</button>
      </form>
       <div className="auth-buttons">
        <button className="login-button">Войти</button>
        <button className="register-button">Зарегистрироваться</button>
      </div>
    </header>
  );
};

export default Header;

