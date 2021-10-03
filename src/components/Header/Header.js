import React from 'react';
import {Link} from "react-router-dom";
import './header.css'

const Header = ({cart}) => {
    let count =  cart.reduce((acc, rec)=>acc + rec.count,0);
    return (
      <header>
          <nav>
              <div className="nav-wrapper">
                  <a href="#" className="brand-logo">Logo</a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                      <li><Link to="/">Главная</Link></li>
                      <li className='list__cart'><Link to="/cart">
                          Корзина
                          <span className='cart__count'>
                          {cart.length === 0 ? '' : count > 9 ? '9+' : count}
                      </span>
                      </Link>

                      </li>
                  </ul>
              </div>
          </nav>
      </header>
    );
};

export default Header;