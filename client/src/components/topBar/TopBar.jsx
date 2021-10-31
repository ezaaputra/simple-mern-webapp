import './topBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {

  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/products">PRODUCTS</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
