import React from 'react';

const Layout = ({ children }) => (
  <div className='container'>
    <header>
      <h1>BytesAndCoffee Consulting</h1>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About Us</a></li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>© 2024 BytesAndCoffee Consulting. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;