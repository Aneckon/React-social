import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <div className="header__item right">
            <div className="header__logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1322/1322026.png"
                alt=""
              />{' '}
              LOGO
            </div>
            <div className="header__input">
              <input type="text" placeholder="Пошук" />
              <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="" />
            </div>
          </div>
          <div className="header__item left">
            <div className="header__reg">
              <a href="/">Login</a>
            </div>
            <div className="header__reg reg">
              <a href="/">Register</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
